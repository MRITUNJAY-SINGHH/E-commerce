const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
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
         unique: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
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
      address: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
         },
      ],
      wishlist: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
         },
      ],
      refreshToken: {
         type: String,
      },
   },
   {
      timestamps: true,
   }
)
userSchema.pre('save', async function (next) {
   const salt = await bcrypt.genSaltSync(15)
   this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.comparePassword = async function (enteredPassword) {
   try {
      return await bcrypt.compare(enteredPassword, this.password)
   } catch (error) {
      return false // Handle the error gracefully
   }
}
//Export the model
module.exports = mongoose.model('User', userSchema)
