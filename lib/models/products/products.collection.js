'use strict';

const AnyCollection = require("../mongo.js");
const ProductsModel = require("./products.schema.js");

class ProductsCollection extends AnyCollection {

  constructor() {
    super(ProductsModel);
  }

}

module.exports = ProductsCollection;
