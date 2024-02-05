const express = require('express');
const authRouter = express.Router();
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
   loginAdmin,
   getWishlist,
   saveAddress,
   userCart,
   getUserCart,
   emptyCart,
   applyCoupon,
   createOrder,
   getOrders,
   updateOrderStatus,
   getAllOrders,
} = require('../controller/userControler');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

authRouter.post('/register', createUser);
authRouter.post('/forget', forgetPasswordToken);
authRouter.put('/forget/:token', resetPassword);
authRouter.put('/password', authMiddleware, updatePassword);
authRouter.put('/order-status/:id', authMiddleware, isAdmin, updateOrderStatus);
authRouter.post('/login', loginUser);
authRouter.post('/login/admin', loginAdmin);
authRouter.post('/cart', authMiddleware, userCart);
authRouter.post('/cart/applycoupon', authMiddleware, applyCoupon);
authRouter.post('/cart/cash-order', authMiddleware, createOrder);
authRouter.get('/allUser', getAllUser);
authRouter.get('/all-order', authMiddleware, getOrders);
authRouter.get('/all-user-order', authMiddleware, isAdmin, getAllOrders);
authRouter.get('/refresh', handleRefreshToken);
authRouter.get('/logout', logout);
authRouter.get('/wishlist', authMiddleware, getWishlist);
authRouter.get('/cart', authMiddleware, getUserCart);
authRouter.get('/:id', authMiddleware, isAdmin, getOneUsers);
authRouter.delete('/empty', authMiddleware, emptyCart);
authRouter.delete('/:id', deleteUser);

authRouter.put('/edit-user', authMiddleware, updateUser);
authRouter.put('/address', authMiddleware, saveAddress);
authRouter.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
authRouter.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = authRouter;
