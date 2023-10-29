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
} = require('../controller/userControler')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')

authRouter.post('/register', createUser)
authRouter.post('/login', loginUser)
authRouter.get('/allUser', getAllUser)
authRouter.get('/refresh', handleRefreshToken)
authRouter.get('/logout', logout)
authRouter.get('/:id', authMiddleware, isAdmin, getOneUsers)
authRouter.delete('/:id', deleteUser)
authRouter.put('/edit-user', authMiddleware, updateUser)
authRouter.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
authRouter.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
module.exports = authRouter
