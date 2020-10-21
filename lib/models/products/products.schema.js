const mongoose = require('mongoose');

// create schema
const { Schema } = mongoose;

const productsSchema = new Schema({
  category: String,
  name: String, 
  display_name: String,
  description: String
});


// create and export model 
module.exports = mongoose.model('Products', productsSchema);