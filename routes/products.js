const express = require('express');

const router = express.Router();

const ProductsModel = require('../lib/models/products/products.schema.js');
const ProductsCollection = require('../lib/models/products/products.collection.js');
const collection = new ProductsCollection(ProductsModel);

// create routes for products
router.post('/products', (req,res,next) => {
  const product = req.body;
  collection.create(product)
    .then(savedProduct => {
      res.send(savedProduct);
    })
    .catch(next)
})

router.get('/products', (req,res,next) => {
  collection.read()
    .then(products => {
      res.send({
        results: products,
        count: products.length,
      });
    })
    .catch(next);
})

router.get('/products/:id', (req,res,next) => {
  const id = req.params.id;
  collection.read(id)
    .then(product => {
      res.send(product[0]);
    })
    .catch(next);
})

router.put('/products/:id', (req,res,next) => {
  const id = req.params.id;
  const newInfo = req.body;
  
  collection.update(id, newInfo)
    .then(product => {
      res.send(product);
    })
    .catch(next);
})

router.delete('/products/:id', (req,res,next) => {
  const id = req.params.id;

  collection.delete(id)
    .then(() => {
      res.send({});
    })
    .catch(next);
})


module.exports = router;