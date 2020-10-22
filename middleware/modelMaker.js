'use strict';

const CategoriesCollection = require('../lib/models/categories/categories.collection.js')
const ProductsCollection = require('../lib/models/products/products.collection.js')
const category = new CategoriesCollection();
const product = new ProductsCollection();

function modelMaker(req, res, next){
  const param = req.params.model;

  switch(param) {
    case "products":
      req.model = product;
      next();
      return;
    case "categories":
      req.model = category;
      next();
      return;
    default: 
      next("Invalid Model");
      return;
  }
}

module.exports = modelMaker;