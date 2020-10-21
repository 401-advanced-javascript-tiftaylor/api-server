'use strict';

const express = require('express');
const app = express();

const timeStamp = require('../middleware/timestamp.js')
const logger = require('../middleware/logger.js')
const notFound = require('../middleware/404.js')
const serverErr = require('../middleware/500.js')
const db = require('../data/db.json');
const catRoutes = require('../routes/categories.js');
const proRoutes = require('../routes/products.js');


app.use(express.json());
// // run at app level for all routes
// app.use(catRoutes);
app.use(proRoutes);
app.use(timeStamp);
app.use(logger);


// create routes for categories
app.post('/categories', (req,res) => {
  const category = req.body;
  db.categories.push(category);
  res.send(category);
})

app.get('/categories', (req,res) => {
  res.send({
    results: db.categories,
    count: db.categories.length,
  });
})

app.get('/categories/:id', (req,res) => {
  const id = req.params.id;
  const category = db.categories.find(c => c.id === id);
  res.send(category)
})

app.put('/categories/:id', (req,res) => {
  const id = req.params.id;
  const newInfo = req.body;
  const index = db.categories.findIndex(c => c.id === id);
  db.categories[index] = newInfo;
  res.send(newInfo);
})

app.delete('/categories/:id', (req,res) => {
  const id = req.params.id;
  const index = db.products.findIndex(p => p.id === id);
  db.products.splice(index, 1);
  res.send({});
})

app.use(notFound);
app.use(serverErr);

// start method for server
function start(PORT){
  app.listen(PORT, () => {
    console.log('Server is running');
  });
}

module.exports = {
  start, 
  app
}