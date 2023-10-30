const express = require('express')
const authRouter = express.Router()
const {
   createUser,
   loginUser,
   getAllUser,
   getOneUsers,
   deleteUser,
   updateUser,
   blockUser,
   unblockUser,
   handleRefreshToken,
   logout,
   updatePassword,
   forgetPasswordToken,
   resetPassword,
} = require('../controller/userControler')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')

authRouter.get('/allUser', getAllUser)
authRouter.get('/refresh', handleRefreshToken)
authRouter.get('/logout', logout)
authRouter.get('/:id', authMiddleware, isAdmin, getOneUsers)
authRouter.post('/register', createUser)
authRouter.post('/login', loginUser)
authRouter.post('/forget', forgetPasswordToken)
authRouter.put('/forget/:token', resetPassword)
authRouter.put('/password', authMiddleware, updatePassword)
authRouter.put('/edit-user', authMiddleware, updateUser)
authRouter.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
authRouter.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
authRouter.delete('/:id', deleteUser)
module.exports = authRouter
