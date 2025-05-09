const fs = require('fs');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const User = require('../models/userModel');
const validateMongoDbId = require('../utils/validateMongodb');
const {
   cloudinaryUploadImg,
   cloudinaryDeleteImg,
} = require('../utils/cloudinary');

//create product
const createProduct = asyncHandler(async (req, res) => {
   try {
      if (req.body.title) {
         req.body.slug = slugify(req.body.title);
      }
      const newProduct = await Product.create(req.body);
      res.json(newProduct);
   } catch (error) {
      throw new Error(error);
   }
});

//get product by id
const getProduct = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
      const FindProduct = await Product.findById(id);
      res.json(FindProduct);
   } catch (error) {
      throw new Error(error);
   }
});

//Update Product

const allProduct = asyncHandler(async (req, res) => {
   try {
      const objQuery = { ...req.query };
      const excludeFields = ['page', 'sort', 'limit', 'fields'];
      excludeFields.forEach((el) => delete objQuery[el]);

      // Extract and handle price-related query parameters
      if (objQuery.price) {
         objQuery.price = { $gte: parseInt(objQuery.price) };
      }

      let query = Product.find(objQuery);
      if (req.query.sort) {
         const sortby = req.query.sort.split(',').join(' ');
         query = query.sort(sortby);
      } else {
         query = query.sort('-createdAt');
      }
      //Limiting tha product
      if (req.query.fields) {
         const fields = req.query.fields.split(',').join(' ');
         query = query.select(fields);
      } else {
         query = query.select('-__v');
      }
      //pagination page
      const page = req.query.page;
      const limit = req.query.limit;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
      if (req.query.page) {
         const productCount = await Product.countDocuments();
         if (skip >= productCount) throw new Error('This Page Does Not Exist');
      }
      const product = await query;
      res.json(product);
   } catch (error) {
      throw new Error(error);
   }
});

const updateProduct = asyncHandler(async (req, res) => {
   const { _id } = req.params;
   try {
      if (req.body.title) {
         req.body.slug = slugify(req.body.title);
      }
      const UpdateProduct = await Product.findByIdAndUpdate({ _id }, req.body, {
         new: true,
      });
      res.json(UpdateProduct);
   } catch (error) {
      throw new Error(error);
   }
});
//Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
   const { _id } = req.params;
   try {
      const DeleteProduct = await Product.findByIdAndDelete({ _id });

      res.json(DeleteProduct);
   } catch (error) {
      throw new Error(error);
   }
});
// Add or remove a product to/from the user's wishlist
const addToWishlist = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   const { productId } = req.body;
   try {
      const user = await User.findById(_id);
      const alreadyAdded = user.wishlist.find(
         (id) => id.toString() === productId
      );
      if (alreadyAdded) {
         user.wishlist.pull(productId);
      } else {
         user.wishlist.push(productId);
      }
      await user.save();
      res.json(user);
   } catch (error) {
      throw new Error(error);
   }
});
//rating Product
const rating = asyncHandler(async (req, res) => {
   const { _id } = req.user;
   const { star, productId, comment } = req.body;

   try {
      const product = await Product.findById(productId);
      const alreadyRated = product.ratings.find(
         (rating) => rating.postedBy.toString() === _id.toString()
      );

      if (alreadyRated) {
         // Update the existing rating
         const updateRating = await Product.updateOne(
            {
               _id: productId,
               'ratings.postedBy': _id,
            },
            {
               $set: { 'ratings.$.star': star, 'ratings.$.comment': comment },
            },
            { new: true }
         );
      } else {
         // Add a new rating
         const rateProduct = await Product.findByIdAndUpdate(
            productId,
            {
               $push: {
                  ratings: { star: star, comment: comment, postedBy: _id },
               },
            },
            { new: true }
         );
      }
      const getAllRating = await Product.findById(productId);
      let totalRating = getAllRating.ratings.length;
      let totalSum = getAllRating.ratings.reduce((acc, rating) => {
         return acc + rating.star;
      }, 0);
      let averageRating = totalSum / totalRating;
      let allRating = await Product.findByIdAndUpdate(
         productId,
         { totalrating: averageRating },
         { new: true }
      );
      res.json(allRating);
   } catch (error) {
      throw new Error(error);
   }
});

module.exports = {
   createProduct,
   getProduct,
   allProduct,
   updateProduct,
   deleteProduct,
   addToWishlist,
   rating,
};
