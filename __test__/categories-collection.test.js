
const CategoriesCollection = require('../lib/models/categories/categories.collection.js');
const collection = new CategoriesCollection();

require('@code-fellows/supergoose');

// TESTING COLLECTION for CATEGORIES
describe('Testing class CategoriesCollection', () => {

  test('note model create()', () => {
    const obj = {
      "name": "body",
      "display_name": "Body Products",
      "description": "Contains items to wash the body"
    };
    
    return collection.create(obj)
      .then((result) => { 
        expect(result.name).toEqual('body');
        expect(result.id).toBeTruthy();
      });
  });

  test('category model delete()', () => {
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
      "name": "body",
      "display_name": "Body Products",
      "description": "Contains items to wash the body"
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
      "name": "body",
      "display_name": "Body Products",
      "description": "Contains items to wash the body"
    };
    const newObj = {
      "name": "body-change",
      "display_name": "Body Products",
      "description": "Contains items to wash the body"
    };
    
    return collection.create(obj)
      .then((result) => { 
        const id = result.id;
        return collection.update(id, newObj)
          .then((result) => { 
            expect(result.id).toBeTruthy();
            expect(result.name).toEqual('body-change');
          });
      })
  });

});

