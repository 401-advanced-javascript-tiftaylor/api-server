'use strict';

const CategoriesModel = require('./categories.schema.js');

class CategoriesCollection  {

  constructor(schema) {
    this.schema = schema;
  }

  /**
   * gets a list 
   * @param {object} id / category
   */
  read(id) {
    if (id) {
      return this.schema.find({ _id: id });
    } else {
      return this.schema.find({});
    }
  }

  /**
   * adds a note to the list
   * @param {object} obj / text, category
   */
  create(obj) {
    const newObj = new this.schema(obj);
    return newObj.save();
  }

  update(id, obj) {
    return this.schema.findByIdAndUpdate(id, obj);
  }

  // /**
  //  * deletes item from list based on id match
  //  * @param {String} id 
  //  */
  // delete(id) {
  //   let removeItem = {
  //     _id: id,
  //   };

  //   return CategoriesModel.deleteOne(removeItem);
  // }

}

module.exports = CategoriesCollection;