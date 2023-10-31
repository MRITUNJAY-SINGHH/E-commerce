const express = require('express')
const router = express.Router()
const {
   createBlog,
   updateBlog,
   deleteBlog,
   getAllBlog,
   getAllBlogById,
} = require('../controller/blogController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
router.get('/', getAllBlog)
router.get('/:id', getAllBlogById)
router.post('/', authMiddleware, isAdmin, createBlog)
router.put('/:id', authMiddleware, isAdmin, updateBlog)
router.delete('/:id', authMiddleware, isAdmin, deleteBlog)

module.exports = router
