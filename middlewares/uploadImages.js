const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const multerStorage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/images'));
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}.jpeg`);
   },
});

const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith('image')) {
      cb(null, true);
   } else {
      cb('Not an image! Please upload only images.', false);
   }
};
const uploadPhoto = multer({
   storage: multerStorage,
   fileFilter: multerFilter,
   limits: {
      fileSize: 5000000,
   },
});
const productImgResize = async (req, res, next) => {
   if (!req.file) return next();
   await Promise.all(
      req.files.map(async (file) => {
         await sharp(file.path)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/img/products/${file.filename}`);
      })
   );
   next();
};
const blogImgResize = async (req, res, next) => {
   if (!req.file) return next();
   await Promise.all(
      req.files.map(async (file) => {
         await sharp(file.path)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/img/blogs/${file.filename}`);
      })
   );
   next();
};
module.exports = { uploadPhoto, productImgResize, blogImgResize };
