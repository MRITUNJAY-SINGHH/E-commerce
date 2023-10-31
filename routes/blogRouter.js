const express = require('express');
const router = express.Router();
const {
   createBlog,
   updateBlog,
   deleteBlog,
   getAllBlog,
   getAllBlogById,
   likedBlog,
   DislikedBlog,
} = require('../controller/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
router.post('/', authMiddleware, isAdmin, createBlog);
router.get('/', getAllBlog);
router.get('/:id', getAllBlogById);
router.put('/likes', authMiddleware, likedBlog);
router.put('/Dislikes', authMiddleware, DislikedBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);

module.exports = router;
