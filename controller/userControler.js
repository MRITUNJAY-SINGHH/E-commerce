const user = require('../models/userModel');
const product = require('../models/productModel');
const Cart = require('../models/cartModel');
const Coupon = require('../models/couponModel');
const Order = require('../models/orderModel');
const uniqid = require('uniqid');
const { generateToken } = require('../config/jwtToken');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');
const { generateRefreshToken } = require('../config/refreshToken');
const jwt = require('jsonwebtoken');
const sendEmail = require('../controller/emailControler');
const crypto = require('crypto');
const Product = require('../models/productModel');

//Create New User
const createUser = asyncHandler(async (req, res) => {
   const email = req.body.email;
   const findUser = await user.findOne({ email });

   if (!findUser) {
      // Create a new user
      const newUser = await user.create(req.body);
      res.json(newUser);
   } else {
      // User Already Exists
      throw new Error('User Already Exists');
   }
});
//Login user
const loginUser = asyncHandler(async function (req, res) {
   const { email, password } = req.body;
   //check user exist or not
   const findUser = await user.findOne({ email });
   if (findUser && (await findUser.comparePassword(password))) {
      const refreshToken = await generateRefreshToken(findUser?._id);
      const updateuser = await user.findByIdAndUpdate(
         findUser.id,
         {
            refreshToken: refreshToken,
         },
         {
            new: true,
         }
      );
      res.cookie('refreshToken', refreshToken, {
         httpOnly: true,
         maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
         _id: findUser?._id,
         firstname: findUser?.firstname,
         lastname: findUser?.lastname,
         email: findUser?.email,
         mobile: findUser?.mobile,
         token: generateToken(findUser?._id),
      });
   } else {
      throw new Error('Invalid Credentials');
   }
});

//Admin Login
const loginAdmin = asyncHandler(async function (req, res) {
   const { email, password } = req.body;
   //check user exist or not
   const findAdmin = await user.findOne({ email });
   if (findAdmin.role !== 'admin') {
      throw new Error('You are not admin');
   }

   if (findAdmin && (await findAdmin.comparePassword(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
      const updateuser = await user.findByIdAndUpdate(
         findAdmin.id,
         {
            refreshToken: refreshToken,
         },
         {
            new: true,
         }
      );
      res.cookie('refreshToken', refreshToken, {
         httpOnly: true,
         maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
         _id: findAdmin?._id,
         firstname: findAdmin?.firstname,
         lastname: findAdmin?.lastname,
         email: findAdmin?.email,
         mobile: findAdmin?.mobile,
         token: generateToken(findAdmin?._id),
      });
   } else {
      throw new Error('Invalid Credentials');
   }
});
//Handle refresh token
const handleRefreshToken = asyncHandler(async function (req, res) {
   const cookie = req.cookies;
   if (!cookie?.refreshToken) throw new Error('no refresh token in cookies');
   const refreshToken = cookie.refreshToken;

   const userData = await user.findOne({ refreshToken });
   if (!userData)
      throw new Error('no Refresh token is present in db or not matched');
   jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decode) => {
      if (err || userData.id !== decode.id) {
         throw new Error('There Are Something Wrong In token');
      }
      const accessToken = generateToken(userData?._id);
      res.json({ accessToken });
   });

   res.json(userData);
});
//get all user

const getAllUser = asyncHandler(async function (req, res) {
   try {
      const getUsers = await user.find();
      res.json(getUsers);
   } catch (error) {
      throw new Error(error);
   }
});

//get One User
const getOneUsers = asyncHandler(async function (req, res) {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const foundUser = await user.findById(id);
      res.json({
         getOneUsers: foundUser,
      });
   } catch (error) {
      throw new Error(error);
   }
});
// Update a User
const updateUser = asyncHandler(async function (req, res) {
   const { _id } = req.user;
   validateMongoDbId(_id);
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
      );
      res.json({
         updateUser: updatedUser,
      });
   } catch (error) {
      throw new Error(error);
   }
});

// Delete a User
const deleteUser = asyncHandler(async function (req, res) {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const deletedUser = await user.findByIdAndDelete(id);
      res.json({
         deleteUser: deletedUser,
      });
   } catch (error) {
      throw new Error(error);
   }
});

//Logout Features
const logout = asyncHandler(async (req, res) => {
   const cookie = req.cookies;
   if (!cookie?.refreshToken) {
      throw new Error('No refresh token in cookies');
   }

   const refreshToken = cookie.refreshToken;

   const userData = await user.findOne({ refreshToken });

   if (!userData) {
      res.clearCookie('refreshToken', {
         httpOnly: true,
         secure: true,
      });
      return res.sendStatus(204); // Forbidden
   }

   await user.findOneAndUpdate({ refreshToken }, { refreshToken: '' }); // Use user model here

   res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
   });

   res.sendStatus(204); // Forbidden
});

//Blocked user

const blockUser = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const blockUser = await user.findByIdAndUpdate(
         id,
         {
            isBlocked: true,
         },
         {
            new: true,
         }
      );
      res.json({
         blockUser,
      });
   } catch (error) {
      throw new Error(error);
   }
});
//unblockUser
const unblockUser = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const unblockUser = await user.findByIdAndUpdate(
         id,
         {
            isBlocked: false,
         },
         {
            new: true,
         }
      );
      res.json({
         Message: 'User Unblocked',
      });
   } catch (error) {
      throw new Error(error);
   }
});

//Update password or reset
const updatePassword = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   const { password } = req.body;
   validateMongoDbId(_id);
   const User = await user.findById(_id);
   if ({ password }) {
      User.password = password;
      const updatePassword = await User.save();
      res.json(updatePassword);
   } else {
      res.json(User);
   }
});
//Forget Password
const forgetPasswordToken = asyncHandler(async (req, res) => {
   const { email } = req.body; // User's email address
   const User = await user.findOne({ email });

   if (!User) {
      throw new Error('User not found with this email');
   }

   try {
      const token = await User.createPasswordResetToken();
      await User.save();

      const resetUrl = `Hello! To reset your password, please click on the following link. This link is valid for the next 10 minutes from now: <a href="http://localhost:8000/api/user/forget/${token}">Click here</a>`;

      const data = {
         to: email,
         text: 'Hey',
         subject: 'Forget Password Link',
         html: resetUrl,
      };

      await sendEmail(data);
      res.json(token);
   } catch (error) {
      console.error('Error sending reset email:', error);

      res.status(500).json({
         error: 'Error sending reset email',
         details: error.message,
      });
   }
});
//Reset Password
const resetPassword = asyncHandler(async (req, res) => {
   const { password } = req.body;
   const { token } = req.params;
   const hasedToken = crypto.createHash('sha256').update(token).digest('hex');
   const User = await user.findOne({
      passwordResetToken: hasedToken,
      passwordResetExpire: { $gt: Date.now() },
   });
   if (!User) throw new Error('Token Expire, Please try Again later');
   User.password = password;
   User.passwordResetToken = undefined;
   User.passwordResetExpire = undefined;
   await User.save();
   res.json(User);
});
//get Wishlist

const getWishlist = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      const User = await user.findById(_id).populate('wishlist');
      res.json(User);
   } catch (error) {
      throw new Error(error);
   }
});

//save all user address

const saveAddress = asyncHandler(async (req, res, next) => {
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      const updatedAddress = await user.findByIdAndUpdate(
         _id,
         {
            address: req?.body.address,
         },
         {
            new: true,
         }
      );
      res.json({
         updatedAddress: updatedAddress,
      });
   } catch (error) {
      throw new Error(error);
   }
});

//User Cart Functionality

const userCart = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   const { cart } = req.body;
   validateMongoDbId(_id);

   try {
      let products = [];
      const User = await user.findById(_id);
      const alreadyExitCart = await Cart.findOne({ orderby: User._id });

      if (alreadyExitCart) {
         alreadyExitCart.deleteOne();
      }
      for (let i = 0; i < cart.length; i++) {
         let object = {};
         object.product = cart[i]._id;
         object.count = cart[i].count;
         object.color = cart[i].color;

         let getPrice = await product
            .findById(cart[i]._id)
            .select('price')
            .exec();

         object.price = getPrice.price;
         products.push(object);
      }

      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
         cartTotal = cartTotal + products[i].price * products[i].count;
      }

      // console.log(products, cartTotal);

      let newCart = await new Cart({
         products,
         cartTotal,
         orderby: req.user._id,
      }).save();
      res.json(newCart);
   } catch (error) {
      throw new Error(error);
   }
});
//get User Cart
const getUserCart = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      const cart = await Cart.findOne({ orderby: _id }).populate(
         'products.product'
      );
      res.json(cart);
   } catch (error) {
      throw new Error(error);
   }
});

// empty cart

const emptyCart = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      const User = await user.findOne({ _id });
      const cart = await Cart.findOneAndRemove({ orderby: User._id });
      res.json(cart);
   } catch (error) {
      throw new Error(error);
   }
});
//Apply coupon
const applyCoupon = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   const { coupon } = req.body;
   validateMongoDbId(_id);
   const validCoupon = await Coupon.findOne({ name: coupon });
   if (validCoupon == null) {
      throw new Error('Invalid Coupon');
   }
   const User = await user.findOne({ _id });
   let { products, cartTotal } = await Cart.findOne({
      orderby: User._id,
   }).populate('products.product');
   let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
   ).toFixed(2);
   await Cart.findOneAndUpdate(
      { orderby: User._id },
      { totalAfterDiscount },
      { new: true }
   );
   res.json(totalAfterDiscount);
});

//create order

const createOrder = asyncHandler(async (req, res) => {
   const { COD, couponApplied } = req.body;
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      if (!COD) throw new Error('COD is required');
      const User = await user.findById(_id);
      let userCart = await Cart.findOne({ orderby: User._id });
      let finalAmount = 0;
      if (couponApplied && userCart.totalAfterDiscount) {
         finalAmount = userCart.totalAfterDiscount;
      } else {
         finalAmount = userCart.cartTotal;
      }
      let newOrder = await new Order({
         products: userCart.products,
         paymentIntent: {
            id: uniqid(),
            amount: finalAmount,
            method: 'COD',
            currency: 'INR',
            status: 'Cash On Delivery',
            created: Date.now(),
         },
         orderby: user._id,
         orderStatus: 'Cash On Delivery',
      }).save();
      let bulkOption = userCart.products.map((item) => {
         return {
            updateOne: {
               filter: { _id: item.product._id },
               update: { $inc: { quantity: -item.count, sold: +item.count } },
            },
         };
      });
      const updateProduct = await Product.bulkWrite(bulkOption, {});
      res.json({
         message: 'Order Created Successfully',
      });
   } catch (error) {
      throw new Error(error);
   }
});

//get Order

const getOrders = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   validateMongoDbId(_id);
   try {
      const orders = await Order.find({ orderby: _id })
         .populate('products.product')
         .populate('orderby')
         .exec();
      res.json(orders);
   } catch (error) {
      throw new Error(error);
   }
});
//get All Orders

const getAllOrders = asyncHandler(async (req, res) => {
   try {
      const orders = await Order.find()
         .populate('products.product')
         .populate('orderby')
         .exec();
      res.json(orders);
   } catch (error) {
      throw new Error(error);
   }
});

//Update order Status
const updateOrderStatus = asyncHandler(async (req, res) => {
   const { status } = req.body;
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const updateOrder = await Order.findByIdAndUpdate(
         id,
         {
            orderStatus: status,
            paymentIntent: {
               status: status,
            },
         },
         { new: true }
      );
      res.json(updateOrder);
   } catch (error) {
      throw new Error(error);
   }
});
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
   loginAdmin,
   getWishlist,
   saveAddress,
   userCart,
   getUserCart,
   emptyCart,
   getAllOrders,
   applyCoupon,
   createOrder,
   getOrders,
   updateOrderStatus,
};
