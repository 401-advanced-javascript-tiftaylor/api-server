const ProductsModel = require('../lib/models/products/products.schema.js');
const ProductsCollection = require('../lib/models/products/products.collection.js');
const collection = new ProductsCollection(ProductsModel);

require('@code-fellows/supergoose');


// TESTING COLLECTION for PRODUCTS
describe('Testing class ProductsCollection', () => {

  test('product model create()', () => {
    const obj = {
      "category": "1",
      "name": "shampoo",
      "display_name": "Awesome Shampoo",
      "description": "Your hair will be awesome if you use this"
    };
    
    return collection.create(obj)
      .then((result) => { 
        expect(result.name).toEqual('shampoo');
        expect(result.id).toBeTruthy();
      });
  });

  test('product model delete()', () => {
    const id = '5f88ba481bbe4c2f0863f612';
    
    return collection.delete(id)
      .then((result) => { 
        expect(result.ok).toBeTruthy();
      });
  });

  test('get all items', () => {
    return collection.read()
      .then((result) => { 
        expect(result).toBeTruthy();
      });
  });

  test('get item by id', () => {
    const obj = {
      "category": "1",
      "name": "shampoo",
      "display_name": "Awesome Shampoo",
      "description": "Your hair will be awesome if you use this"
    };
    
    return collection.create(obj)
      .then((result) => { 
        const id = result.id;
        return collection.read(id)
          .then((result) => { 
            expect(result[0].id).toBeTruthy();
          });
      })
  });

  test('put item by id', () => {
    const obj = {
      "category": "1",
      "name": "shampoo",
      "display_name": "Awesome Shampoo",
      "description": "Your hair will be awesome if you use this"
    };
    const newObj = {
      "category": "1",
      "name": "shampoo-change",
      "display_name": "Awesome Shampoo",
      "description": "Your hair will be awesome if you use this"
    };
    
    return collection.create(obj)
      .then((result) => { 
        const id = result.id;
        return collection.update(id, newObj)
          .then((result) => { 
            expect(result.id).toBeTruthy();
            expect(result.name).toEqual('shampoo-change');
          });
      })
  });

});