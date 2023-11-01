const cloudinary = require('cloudinary');
cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const cloudinaryUploadImg = async (fileToUpload) => {
   return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(fileToUpload, (result) => {
         if (result.error) {
            reject(result.error.message);
         } else {
            resolve({
               url: result.secure_url,
               resource_type: result.resource_type,
            });
         }
      });
   });
};

module.exports = cloudinaryUploadImg;
