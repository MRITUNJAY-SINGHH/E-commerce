const mongoose = require('mongoose');

let BrandSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Brand', BrandSchema);
