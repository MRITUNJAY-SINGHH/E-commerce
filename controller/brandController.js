const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');

//Create Brand
const CreateCategory = asyncHandler(async (req, res) => {
   try {
      const createNewCategory = await Brand.create(req.body);
      res.json(createNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category
const getCategory = asyncHandler(async (req, res) => {
   try {
      const getAllCategory = await Brand.find();
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category by Id
const getCategoryById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
      const getAllCategory = await Brand.findById(id);
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Update Brand
const updateCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const updateNewCategory = await Brand.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      res.json(updateNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Delete Brand
const deleteCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const DeleteCategory = await Brand.findByIdAndDelete(id);
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
