'use strict';

const AnyCollection = require("../mongo.js");
const CategoriesModel = require("./categories.schema.js");

class CategoriesCollection extends AnyCollection {

  constructor() {
    super(CategoriesModel);
  }

}

module.exports = CategoriesCollection;