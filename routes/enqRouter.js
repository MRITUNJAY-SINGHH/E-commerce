const express = require('express');
const {
   CreateCategory,
   updateCategory,
   deleteCategory,
   getCategory,
   getCategoryById,
} = require('../controller/enqcontroller');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.post('/', CreateCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;
