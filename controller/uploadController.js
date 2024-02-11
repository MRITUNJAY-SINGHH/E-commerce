const fs = require('fs');
const asyncHandler = require('express-async-handler');

const {
   cloudinaryUploadImg,
   cloudinaryDeleteImg,
} = require('../utils/cloudinary');
const cloudinary = require('cloudinary').v2;

//upload images
const uploadImages = asyncHandler(async (req, res) => {
   try {
      const uploader = async (path) =>
         await cloudinaryUploadImg(path, 'images');
      const urls = [];
      const files = req.files;
      for (const file of files) {
         const { path } = file;
         const newPath = await uploader(path);
         urls.push(newPath);
         fs.unlinkSync(path);
      }
      const images = urls.map((file) => {
         return file;
      });
      res.json(images);
   } catch (error) {
      throw new Error(error);
   }
});
// delete all images
const deleteAllImages = asyncHandler(async (req, res) => {
   try {
      // Fetch all resources
      const resources = await cloudinary.api.resources({
         resource_type: 'image',
         max_results: 500, // Fetch up to 500 images per request
      });

      // Extract public_ids of all images
      const publicIds = resources.resources.map(
         (resource) => resource.public_id
      );

      // Delete all images at once
      await cloudinary.api.delete_resources(publicIds);

      res.json({ message: 'All images deleted' });
   } catch (error) {
      throw new Error(error);
   }
});

//delete images
const deleteImages = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
      const deleted = await cloudinaryDeleteImg(id, 'images');
      res.json({ message: 'Deleted' });
   } catch (error) {
      throw new Error(error);
   }
});
module.exports = { uploadImages, deleteImages, deleteAllImages };
