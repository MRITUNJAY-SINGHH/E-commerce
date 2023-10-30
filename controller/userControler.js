const { generateToken } = require('../config/jwtToken')
const user = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodb')
const { generateRefreshToken } = require('../config/refreshToken')
const jwt = require('jsonwebtoken')
const sendEmail = require('../controller/emailControler')
const crypto = require('crypto')

const createUser = asyncHandler(async (req, res) => {
   const email = req.body.email
   const findUser = await user.findOne({ email })

   if (!findUser) {
      // Create a new user
      const newUser = await user.create(req.body)
      res.json(newUser)
   } else {
      // User Already Exists
      throw new Error('User Already Exists')
   }
})

const loginUser = asyncHandler(async function (req, res) {
   const { email, password } = req.body
   //check user exist or not
   const findUser = await user.findOne({ email })
   if (findUser && (await findUser.comparePassword(password))) {
      const refreshToken = await generateRefreshToken(findUser?._id)
      const updateuser = await user.findByIdAndUpdate(
         findUser.id,
         {
            refreshToken: refreshToken,
         },
         {
            new: true,
         }
      )
      res.cookie('refreshToken', refreshToken, {
         httpOnly: true,
         maxAge: 72 * 60 * 60 * 1000,
      })
      res.json({
         _id: findUser?._id,
         firstname: findUser?.firstname,
         lastname: findUser?.lastname,
         email: findUser?.email,
         mobile: findUser?.mobile,
         token: generateToken(findUser?._id),
      })
   } else {
      throw new Error('Invalid Credentials')
   }
})
//Handle refresh token
const handleRefreshToken = asyncHandler(async function (req, res) {
   const cookie = req.cookies
   if (!cookie?.refreshToken) throw new Error('no refresh token in cookies')
   const refreshToken = cookie.refreshToken
   console.log(refreshToken)
   const userData = await user.findOne({ refreshToken })
   if (!userData)
      throw new Error('no Refresh token is present in db or not matched')
   jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decode) => {
      if (err || userData.id !== decode.id) {
         throw new Error('There Are Something Wrong In token')
      }
      const accessToken = generateToken(userData?._id)
      res.json({ accessToken })
   })

   res.json(userData)
})
//get all user

const getAllUser = asyncHandler(async function (req, res) {
   try {
      const getUsers = await user.find()
      res.json(getUsers)
   } catch (error) {
      throw new Error(error)
   }
})

//get One User
const getOneUsers = asyncHandler(async function (req, res) {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const foundUser = await user.findById(id)
      res.json({
         getOneUsers: foundUser,
      })
   } catch (error) {
      throw new Error(error)
   }
})
// Update a User
const updateUser = asyncHandler(async function (req, res) {
   const { _id } = req.user
   validateMongoDbId(_id)
   try {
      const updatedUser = await user.findByIdAndUpdate(
         _id,
         {
            firstname: req?.body.firstname,
            lastname: req?.body.lastname,
            email: req?.body.email,
            mobile: req?.body.mobile,
         },
         {
            new: true,
         }
      )
      res.json({
         updateUser: updatedUser,
      })
   } catch (error) {
      throw new Error(error)
   }
})

// Delete a User
const deleteUser = asyncHandler(async function (req, res) {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const deletedUser = await user.findByIdAndDelete(id)
      res.json({
         deleteUser: deletedUser,
      })
   } catch (error) {
      throw new Error(error)
   }
})

//Logout Features

//Logout Features
const logout = asyncHandler(async (req, res) => {
   const cookie = req.cookies
   if (!cookie?.refreshToken) {
      throw new Error('No refresh token in cookies')
   }

   const refreshToken = cookie.refreshToken
   console.log(refreshToken)
   const userData = await user.findOne({ refreshToken })

   if (!userData) {
      res.clearCookie('refreshToken', {
         httpOnly: true,
         secure: true,
      })
      return res.sendStatus(204) // Forbidden
   }

   await user.findOneAndUpdate({ refreshToken }, { refreshToken: '' }) // Use user model here

   res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
   })

   res.sendStatus(204) // Forbidden
})

//Blocked user

const blockUser = asyncHandler(async (req, res) => {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const blockUser = await user.findByIdAndUpdate(
         id,
         {
            isBlocked: true,
         },
         {
            new: true,
         }
      )
      res.json({
         blockUser,
      })
   } catch (error) {
      throw new Error(error)
   }
})
//unblockUser
const unblockUser = asyncHandler(async (req, res) => {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const unblockUser = await user.findByIdAndUpdate(
         id,
         {
            isBlocked: false,
         },
         {
            new: true,
         }
      )
      res.json({
         Message: 'User Unblocked',
      })
   } catch (error) {
      throw new Error(error)
   }
})

//reset password
const updatePassword = asyncHandler(async (req, res) => {
   const { _id } = req.user
   const { password } = req.body
   validateMongoDbId(_id)
   const User = await user.findById(_id)
   if ({ password }) {
      User.password = password
      const updatePassword = await User.save()
      res.json(updatePassword)
   } else {
      res.json(User)
   }
})
//Forget Password
const forgetPasswordToken = asyncHandler(async (req, res) => {
   const { email } = req.body // User's email address
   const User = await user.findOne({ email })

   if (!User) {
      throw new Error('User not found with this email')
   }

   try {
      const token = await User.createPasswordResetToken()
      await User.save()

      const resetUrl = `Hello! To reset your password, please click on the following link. This link is valid for the next 10 minutes from now: <a href="http://localhost:8000/api/user/forget/${token}">Click here</a>`

      const data = {
         to: email,
         text: 'Hey',
         subject: 'Forget Password Link',
         html: resetUrl,
      }

      await sendEmail(data)
      res.json(token)
   } catch (error) {
      console.error('Error sending reset email:', error)

      res.status(500).json({
         error: 'Error sending reset email',
         details: error.message,
      })
   }
})
const resetPassword = asyncHandler(async (req, res) => {
   const { password } = req.body
   const { token } = req.params
   const hasedToken = crypto.createHash('sha256').update(token).digest('hex')
   const User = await user.findOne({
      passwordResetToken: hasedToken,
      passwordResetExpire: { $gt: Date.now() },
   })
   if (!User) throw new Error('Token Expire, Please try Again later')
   User.password = password
   User.passwordResetToken = undefined
   User.passwordResetExpire = undefined
   await User.save()
   res.json(User)
})

module.exports = {
   createUser,
   loginUser,
   getAllUser,
   getOneUsers,
   updateUser,
   deleteUser,
   blockUser,
   unblockUser,
   handleRefreshToken,
   logout,
   updatePassword,
   forgetPasswordToken,
   resetPassword,
}
