'use strict';

const ProductsModel = require('./products.schema.js');

class ProductsCollection  {

  /**
   * gets a list of notes
   * @param {object} filterObj / category
   */
  get(id) {
    // copy teacher
  }

  /**
   * adds a note to the list
   * @param {object} obj / text, category
   */
  create(obj) {
    const note = new productsModel(obj);
    return note.save();
  }

  update(id, obj) {
    // find on mongoose docs: findOneByIdAndUpdate()
  }

  /**
   * deletes item from list based on id match
   * @param {String} id 
   */
  delete(id) {
    let removeItem = {
      _id: id,
    };

    return ProductsModel.deleteOne(removeItem);
  }

}

module.exports = ProductsCollection;
