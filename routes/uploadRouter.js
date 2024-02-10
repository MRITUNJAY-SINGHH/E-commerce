const express = require('express');
const router = express.Router();
const {
   uploadImages,
   deleteImages,
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
   uploadPhoto.array('images', 10), // max 20 images
   productImgResize,
   uploadImages
);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteImages);

module.exports = router;
