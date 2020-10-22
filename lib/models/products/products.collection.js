'use strict';

class ProductsCollection  {

  constructor(schema) {
    this.schema = schema;
  }

  /**
   * gets a list of notes
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
    return this.schema.findByIdAndUpdate(id, obj, {
      new: true,
    });
  }

  /**
   * deletes item from list based on id match
   * @param {String} id 
   */
  delete(id) {
    let removeItem = {
      _id: id,
    };

    return this.schema.deleteOne(removeItem);
  }

}

module.exports = ProductsCollection;
