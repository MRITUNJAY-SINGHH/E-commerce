const mongoose = require('mongoose');
let cartSchema = new mongoose.Schema(
   {
      products: [
         {
            product: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Product',
            },
            count: Number,
            color: String,
            price: Number,
         },
      ],
      cartTotal: Number,
      totalAfterDiscount: Number,
      orderby: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user',
      },
   },
   { timestamps: true }
);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
