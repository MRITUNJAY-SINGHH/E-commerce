const express = require('express')
const router = express.Router()
const {
   createProduct,
   getProduct,
   allProduct,
   updateProduct,
   deleteProduct,
} = require('../controller/productControler')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
router.get('/:id', getProduct)
router.get('/', allProduct)
router.post('/', authMiddleware, isAdmin, createProduct)
router.put('/:_id', authMiddleware, isAdmin, updateProduct)
router.delete('/:_id', authMiddleware, isAdmin, deleteProduct)

module.exports = router
