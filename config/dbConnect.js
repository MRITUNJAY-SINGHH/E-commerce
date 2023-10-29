const mongoose = require('mongoose');

const dbConnect = async () => {
   const dbURL = process.env.MONGODB_URL;
   console.log(`Attempting to connect to MongoDB at ${dbURL}`);

   try {
      await mongoose.connect(dbURL);
      console.log('Database successfully connected');
   } catch (error) {
      console.error(`Database Error: ${error}`);
   }
};

module.exports = dbConnect;
