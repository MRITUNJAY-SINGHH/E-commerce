const express = require('express');
const router = express.Router();
const {
   createProduct,
   getProduct,
   allProduct,
   updateProduct,
   deleteProduct,
   addToWishlist,
   rating,
   uploadImages,
} = require('../controller/productControler');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const {
   uploadPhoto,
   productImgResize,
} = require('../middlewares/uploadImages');
router.get('/:id', getProduct);
router.get('/', allProduct);
router.post('/', authMiddleware, isAdmin, createProduct);
router.put(
   '/upload/:id',
   authMiddleware,
   isAdmin,
   uploadPhoto.array('images', 20), // max 20 images
   productImgResize,
   uploadImages
);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/rating', authMiddleware, rating);
router.put('/:_id', authMiddleware, isAdmin, updateProduct);
router.delete('/:_id', authMiddleware, isAdmin, deleteProduct);

module.exports = router;
