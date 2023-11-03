const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
let enquirySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   mobile: {
      type: Number,
      required: true,
   },
   comment: {
      type: String,
      required: true,
   },
   status: {
      type: String,
      default: 'Submitted',
      enum: ['Submitted', 'Processing', 'Completed'],
   },
});

//Export the model
module.exports = mongoose.model('Enquiry', enquirySchema);
