const blog = require('../models/blogModel');
const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodb');
const cloudinaryUploadImg = require('../utils/cloudinary');
const fs = require('fs');

//Create Blog

const createBlog = asyncHandler(async (req, res) => {
   try {
      const newBlog = await blog.create(req.body);
      res.json(newBlog);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All Blogs

const getAllBlog = asyncHandler(async (req, res) => {
   try {
      const getBlog = await blog.find();
      res.json(getBlog);
   } catch (error) {
      throw new Error(error);
   }
});
//Get All Blogs by Id
const getAllBlogById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const getBlogById = await blog
         .findById(id)
         .populate('Likes')
         .populate('Dislikes');
      const updatedBlog = await blog.findByIdAndUpdate(
         id,
         { $inc: { numView: 1 } },
         { new: true }
      );
      res.json(getBlogById);
   } catch (error) {
      throw new Error(error);
   }
});

//Update Blog

const updateBlog = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const updateBlog = await blog.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      res.json(updateBlog);
   } catch (error) {
      throw new Error(error);
   }
});
//delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
      const deleteBlog = await blog.findByIdAndDelete(id);
      res.json(deleteBlog);
   } catch (error) {
      throw new Error(error);
   }
});
//Liked Blog
const likedBlog = asyncHandler(async (req, res) => {
   const { blogId } = req.body;

   validateMongoDbId(blogId);
   const foundBlog = await blog.findById(blogId);
   const loginUserId = req?.user?._id;
   const isLiked = foundBlog?.isLiked;
   const alreadyDisliked = foundBlog?.Dislikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
   );
   if (alreadyDisliked) {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $pull: { Dislikes: loginUserId },
            isDisliked: false,
         },
         { new: true }
      );
      res.json(updatedBlog);
   }
   if (isLiked) {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $pull: { Likes: loginUserId },
            isLiked: false,
         },
         { new: true }
      );
      res.json(updatedBlog);
   } else {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $push: { Likes: loginUserId },
            isLiked: true,
         },
         { new: true }
      );
      res.json(updatedBlog);
   }
});

//DisLiked Blocked
const DislikedBlog = asyncHandler(async (req, res) => {
   const { blogId } = req.body;

   validateMongoDbId(blogId);
   const foundBlog = await blog.findById(blogId);
   const loginUserId = req?.user?._id;
   const isDisliked = foundBlog?.isDisliked;
   const alreadyLiked = foundBlog?.Likes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
   );
   if (alreadyLiked) {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $pull: { Likes: loginUserId }, // Corrected 'Likes' field name
            isLiked: false,
         },
         { new: true }
      );
      res.json(updatedBlog);
   }
   if (isDisliked) {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $pull: { Dislikes: loginUserId },
            isDisliked: false, // Corrected 'isDisliked' field name
         },
         { new: true }
      );
      res.json(updatedBlog);
   } else {
      const updatedBlog = await blog.findByIdAndUpdate(
         blogId,
         {
            $push: { Dislikes: loginUserId },
            isDisliked: true, // Corrected 'isDisliked' field name
         },
         { new: true }
      );
      res.json(updatedBlog);
   }
});
const uploadImages = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
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
      const findBlog = await blog.findByIdAndUpdate(
         id,
         {
            images: urls.map((file) => {
               return file;
            }),
         },
         { new: true }
      );
      res.json(findBlog);
   } catch (error) {
      throw new Error(error);
   }
});

module.exports = {
   createBlog,
   updateBlog,
   deleteBlog,
   getAllBlog,
   getAllBlogById,
   likedBlog,
   DislikedBlog,
   uploadImages,
};
