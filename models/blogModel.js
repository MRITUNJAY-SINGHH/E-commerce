const mongoose = require('mongoose')

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
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
            ref: 'user',
         },
      ],
      Dislikes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
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
      image: {
         type: String,
         default:
            'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp',
      },
      author: {
         type: String,
         default: 'Admin',
      },
   },
   {
      timestamps: true,
   }
)

// Export the model
module.exports = mongoose.model('Blog', blogSchema)
