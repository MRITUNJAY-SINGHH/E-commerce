const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema(
   {
      products: [
         {
            product: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Product',
            },
            count: Number,
            color: String,
         },
      ],
      paymentIntent: {
         type: String,
         enum: ['Cash On Delivery', 'Stripe'],
         default: 'Cash On Delivery',
      },
      orderStatus: {
         type: String,
         default: 'Not Processed',
         enum: [
            'Not Processed',
            'Cash On Delivery',
            'Processing',
            'Dispatched',
            'Cancelled',
            'Completed',
         ],
      },
      orderby: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
