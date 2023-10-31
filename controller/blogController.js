const blog = require('../models/blogModel')
const user = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongodb')

//Create Blog

const createBlog = asyncHandler(async (req, res) => {
   try {
      const newBlog = await blog.create(req.body)
      res.json(newBlog)
   } catch (error) {
      throw new Error(error)
   }
})
//Get All Blogs

const getAllBlog = asyncHandler(async (req, res) => {
   try {
      const getBlog = await blog.find()
      res.json(getBlog)
   } catch (error) {
      throw new Error(error)
   }
})
//Get All Blogs by Id
const getAllBlogById = asyncHandler(async (req, res) => {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const getBlogById = await blog.findByIdAndUpdate(
         id,
         { $inc: { numView: 1 } },
         { new: true }
      )
      res.json(getBlogById)
   } catch (error) {
      throw new Error(error)
   }
})

//Update Blog

const updateBlog = asyncHandler(async (req, res) => {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const updateBlog = await blog.findByIdAndUpdate(id, req.body, {
         new: true,
      })
      res.json(updateBlog)
   } catch (error) {
      throw new Error(error)
   }
})
//delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
   const { id } = req.params
   validateMongoDbId(id)
   try {
      const deleteBlog = await blog.findByIdAndDelete(id)
      res.json(deleteBlog)
   } catch (error) {
      throw new Error(error)
   }
})
//Liked Blog
const likedBlog = asyncHandler(async (req, res) => {
   const { blogId } = req.body
   validateMongoDbId(blogId)
   const blog = await blog.findById(blogId)
   const loginUserId = req?.user?._id
   const isLiked = blog?.isLiked
})

module.exports = {
   createBlog,
   updateBlog,
   deleteBlog,
   getAllBlog,
   getAllBlogById,
}
