const express = require('express');

const router = express.Router();


// create routes for products
router.post('/products', (req,res) => {
  const product = req.body;
  db.products.push(product);
  res.send(product);
})

router.get('/products', (req,res) => {
  res.send({
    results: db.products,
    count: db.products.length,
  });
})

router.get('/products/:id', (req,res) => {
  const id = req.params.id;
  const product = db.products.find(p => p.id === id);
  res.send(product)
})

router.put('/products/:id', (req,res) => {
  const id = req.params.id;
  const newInfo = req.body;
  const index = db.products.findIndex(p => p.id === id);
  db.products[index] = newInfo;
  res.send(newInfo);
})

router.delete('/products/:id', (req,res) => {
  const id = req.params.id;
  const index = db.products.findIndex(p => p.id === id);
  db.products.splice(index, 1);
  res.send({});
})


module.exports = router;