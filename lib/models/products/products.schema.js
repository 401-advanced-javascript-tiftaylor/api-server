const mongoose = require('mongoose');

// create schema
const { Schema } = mongoose;

const productsSchema = new Schema({
  // pull off db file
  text: String,
  category: String
});


// create and export model 
module.exports = mongoose.model('Products', productsSchema);