const mongoose = require('mongoose')

let productSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },
      slug: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
      },
      description: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      brand: {
         type: String,
         required: true,
      },
      quantity: {
         type: Number,
         require: true,
      },
      sold: {
         type: Number,
         default: 0,
      },
      images: {
         type: Array,
      },
      color: {
         type: String,
         required: true,
      },
      ratings: {
         star: Number,
         postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      },
   },
   { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
