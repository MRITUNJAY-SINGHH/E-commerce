const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
let blogSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      numView: {
         type: Number,
         default: 0,
      },
      Likes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
         },
      ],
      Dislikes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
         },
      ],
      isLiked: {
         type: Boolean,
         default: false,
      },
      isDisliked: {
         type: Boolean,
         default: false,
      },
      author: {
         type: String,
         default: 'Admin',
      },
      images: [],
   },
   {
      toJSON: {
         virtuals: true,
      },
      toObject: {
         virtuals: true,
      },
      timestamps: true,
   }
);

// Export the model
module.exports = mongoose.model('Blog', blogSchema);
