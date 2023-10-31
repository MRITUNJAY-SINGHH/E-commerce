const Category = require('../models/productCategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');

//Create Category
const CreateCategory = asyncHandler(async (req, res) => {
   try {
      const createNewCategory = await Category.create(req.body);
      res.json(createNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category
const getCategory = asyncHandler(async (req, res) => {
   try {
      const getAllCategory = await Category.find();
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category by Id
const getCategoryById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
      const getAllCategory = await Category.findById(id);
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Update Category
const updateCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const updateNewCategory = await Category.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      res.json(updateNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Delete Category
const deleteCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const DeleteCategory = await Category.findByIdAndDelete(id);
      res.json(DeleteCategory);
   } catch (error) {
      throw new Error(error);
   }
});

module.exports = {
   CreateCategory,
   getCategory,
   updateCategory,
   deleteCategory,
   getCategoryById,
};
