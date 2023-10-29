const mongoose = require('mongoose')

const dbConnect = async () => {
   const dbURL = process.env.MONGODB_URL

   try {
      await mongoose.connect(dbURL)
      console.log('Database successfully connected')
   } catch (error) {
      console.error(`Database Error: ${error}`)
   }
}

module.exports = dbConnect
