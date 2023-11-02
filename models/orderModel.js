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
      paymentIntent: {},
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
      orderby: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   },
   { timestamps: true }
);
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
