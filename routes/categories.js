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
      res.send({
        results: categories,
        count: categories.length,
      });
    })
    .catch(next);

})

router.get('/categories/:id', (req,res,next) => {
  const id = req.params.id;
  collection.read(id)
    .then(category => {
      res.send(category[0]);
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

router.delete('/categories/:id', (req,res, next) => {
  const id = req.params.id;

  collection.delete(id)
    .then(() => {
      res.send({});
    })
    .catch(next);
})


module.exports = router;