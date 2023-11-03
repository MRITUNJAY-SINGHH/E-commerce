const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema(
   {
      firstname: {
         type: String,
         required: true,
      },
      lastname: {
         type: String,
         required: true,
      },
      mobile: {
         type: Number,
         required: true,
         validate: {
            validator: function (v) {
               // Ensure the mobile number has at least 10 digits
               return /^\d{10,}$/.test(v);
            },
            message: 'Mobile number must have at least 10 digits',
         },
      },
      email: {
         type: String,
         required: true,
         validate: {
            validator: function (v) {
               // Ensure the email is in a valid format (ends with @gmail.com)
               return /@gmail\.com$/.test(v);
            },
            message:
               'Email must be a valid Gmail address (e.g., user@gmail.com)',
         },
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: 'User',
      },
      isBlocked: {
         type: Boolean,
         default: false,
      },
      cart: {
         type: Array,
         default: [],
      },
      address: {
         type: String,
      },
      wishlist: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
         },
      ],
      refreshToken: {
         type: String,
      },
      passwordChangedAt: Date,
      passwordResetToken: String,
      passwordResetExpire: Date,
   },
   {
      timestamps: true,
   }
);
userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next();
   }
   const salt = await bcrypt.genSaltSync(15);
   this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.comparePassword = async function (enteredPassword) {
   try {
      return await bcrypt.compare(enteredPassword, this.password);
   } catch (error) {
      return false; // Handle the error gracefully
   }
};
userSchema.methods.createPasswordResetToken = async function () {
   const resetToken = crypto.randomBytes(32).toString('hex');
   this.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
   this.passwordResetExpire = Date.now() + 10 * 60 * 1000; // 10 Minutes
   return resetToken;
};

//Export the model
module.exports = mongoose.model('User', userSchema);
