const mongoose = require('mongoose');

let blogCategorySchema = new mongoose.Schema(
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

module.exports = mongoose.model('BlogCategory', blogCategorySchema);
