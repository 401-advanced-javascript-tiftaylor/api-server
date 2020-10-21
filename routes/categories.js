const express = require('express');

const router = express.Router();

const CategoriesModel = require('../lib/models/categories/categories.schema.js');
const CategoriesCollection = require('../lib/models/categories/categories.collection.js');
const collection = new CategoriesCollection(CategoriesModel);

// create routes for categories
router.post('/categories', (req,res,next) => {
  const category = req.body;
  collection.create(category)
    .then(savedCategory => {
      res.send(savedCategory);
    })
    .catch(next)
})

router.get('/categories', (req,res, next) => {
  collection.read()
    .then(categories => {
      res.send(categories);
    })
    .catch(next);

})

router.get('/categories/:id', (req,res,next) => {
  const id = req.params.id;
  collection.read(id)
    .then(category => {
      res.send(category);
    })
    .catch(next);
})

router.put('/categories/:id', (req,res, next) => {
  const id = req.params.id;
  const newInfo = req.body;
  
  collection.update(id, newInfo)
    .then(category => {
      res.send(category);
    })
    .catch(next);
})

// router.delete('/categories/:id', (req,res) => {
//   const id = req.params.id;
//   const index = db.products.findIndex(p => p.id === id);
//   db.products.splice(index, 1);
//   res.send({});
// })


module.exports = router;