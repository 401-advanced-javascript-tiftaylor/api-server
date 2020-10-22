'use strict';

const express = require('express');

const modelMaker = require('../middleware/modelMaker.js');
const router = express.Router();
router.param('model', modelMaker);

router.post('/:model', (req,res,next) => {
  const thing = req.body;
  req.model.create(thing)
    .then(thing => {
      res.send(thing);
    })
    .catch(next)
})

router.get('/:model', (req,res,next) => {
  req.model.read()
    .then(things => {
      res.send({
        results: things,
        count: things.length,
      });
    })
    .catch(next);
})

router.get('/:model/:id', (req,res,next) => {
  const id = req.params.id;
  req.model.read(id)
    .then(thing => {
      res.send(thing[0]);
    })
    .catch(next);
})

router.put('/:model/:id', (req,res,next) => {
  const id = req.params.id;
  const newInfo = req.body;
  
  req.model.update(id, newInfo)
    .then(thing => {
      res.send(thing);
    })
    .catch(next);
})

router.delete('/:model/:id', (req,res,next) => {
  const id = req.params.id;

  req.model.delete(id)
    .then(() => {
      res.send({});
    })
    .catch(next);
})


module.exports = router;