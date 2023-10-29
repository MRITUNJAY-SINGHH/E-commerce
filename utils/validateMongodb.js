const mongoose = require('mongoose')
const validateMongoDbId = (id) => {
   const valid = mongoose.Types.ObjectId.isValid(id)
   if (!valid) throw new Error('this id is not valid or not found')
}
module.exports = validateMongoDbId
