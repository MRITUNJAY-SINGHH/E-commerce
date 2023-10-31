const express = require('express');
const {
   CreateCategory,
   updateCategory,
   deleteCategory,
   getCategory,
   getCategoryById,
} = require('../controller/productCategoryController');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();
router.get('/', authMiddleware, isAdmin, getCategory);
router.get('/:id', authMiddleware, isAdmin, getCategoryById);
router.post('/', authMiddleware, isAdmin, CreateCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;
