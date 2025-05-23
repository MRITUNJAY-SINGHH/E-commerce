const mongoose = require('mongoose');

let productCategorySchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         unique: true,
         index: true,
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('productCategory', productCategorySchema);
