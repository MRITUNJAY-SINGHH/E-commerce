const Color = require('../models/colorModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');

//Create Color
const CreateCategory = asyncHandler(async (req, res) => {
   try {
      const createNewCategory = await Color.create(req.body);
      res.json(createNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category
const getCategory = asyncHandler(async (req, res) => {
   try {
      const getAllCategory = await Color.find();
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All category by Id
const getCategoryById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
      const getAllCategory = await Color.findById(id);
      res.json(getAllCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Update Color
const updateCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const updateNewCategory = await Color.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      res.json(updateNewCategory);
   } catch (error) {
      throw new Error(error);
   }
});
//Delete Color
const deleteCategory = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const DeleteCategory = await Color.findByIdAndDelete(id);
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
