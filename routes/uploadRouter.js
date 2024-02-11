const express = require('express');
const router = express.Router();
const {
   uploadImages,
   deleteImages,
   deleteAllImages,
} = require('../controller/uploadController');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const {
   uploadPhoto,
   productImgResize,
} = require('../middlewares/uploadImages');

router.post(
   '/',
   authMiddleware,
   isAdmin,
   uploadPhoto.array('images', 10), // 10 images max
   productImgResize,
   uploadImages
);
router.delete('/delete', authMiddleware, isAdmin, deleteAllImages);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteImages);

module.exports = router;
