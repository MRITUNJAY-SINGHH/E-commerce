const user = require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async (req, res, next) => {
   let token
   if (
      req?.headers &&
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
   ) {
      token = req.headers.authorization.split(' ')[1]
      try {
         if (token) {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            const User = await user.findById(decode?.id)
            req.user = User
            next()
         }
      } catch (error) {
         throw new Error('Not Authorized Token Expired, Please Login Again')
      }
   } else {
      throw new Error('There Is No Token Attached In Header')
   }
})

const isAdmin = asyncHandler(async (req, res, next) => {
   const { email } = req.user
   const adminUser = await user.findOne({ email })
   if (adminUser.role !== 'admin') {
      throw new Error('You Are Not An Admin')
   } else {
      next()
   }
})

module.exports = { authMiddleware, isAdmin }
