const mongoose = require('mongoose');

// create schema
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: String, 
  display_name: String,
  description: String
});

categoriesSchema.set('toJSON', {
  virtuals: true,
});

// create and export model 
module.exports = mongoose.model('Categories', categoriesSchema);