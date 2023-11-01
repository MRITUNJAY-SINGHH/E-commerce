const Coupon = require('../models/couponModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');

//Create Coupon

const createCoupon = asyncHandler(async (req, res) => {
   try {
      const newCoupon = await Coupon.create(req.body);
      res.json(newCoupon);
   } catch (error) {
      throw new Error(error);
   }
});
//Get all coupon

const getAllCoupon = asyncHandler(async (req, res) => {
   try {
      const allCoupon = await Coupon.find();
      res.json(allCoupon);
   } catch (error) {
      throw new Error(error);
   }
});
//Get all coupon by id

const getAllCouponById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const allCouponById = await Coupon.findById(id);
      res.json(allCouponById);
   } catch (error) {
      throw new Error(error);
   }
});
//Update Coupon

const updateCoupon = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const UpdateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      res.json(UpdateCoupon);
   } catch (error) {
      throw new Error(error);
   }
});
// delete Coupon

const deleteCoupon = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const DeleteCoupon = await Coupon.findByIdAndDelete(id);
      res.json(DeleteCoupon);
   } catch (error) {
      throw new Error(error);
   }
});

module.exports = {
   createCoupon,
   getAllCoupon,
   getAllCouponById,
   updateCoupon,
   deleteCoupon,
};
