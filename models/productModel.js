const mongoose = require('mongoose');

let productSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },
      slug: {
         type: String,

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
      images: [
         {
            public_id: {
               type: String,
            },
            url: {
               type: String,
            },
         },
      ],
      color: [],
      tags: [],
      ratings: [
         {
            star: Number,
            comment: String,
            postedBy: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User',
            },
         },
      ],
      totalrating: {
         type: String,
         default: 0,
      },
   },
   { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
