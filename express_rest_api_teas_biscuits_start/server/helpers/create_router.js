const express = require('express');

const createRouter = function(data){
  const router = express.Router();

  // INDEX
  router.get('/', (req, res) => {
    res.json(data);
  });

  // SHOW
  router.get('/:id', (req, res) => {
    res.json(data[req.params.id]);
  });

  // CREATE
  router.post('/', (req, res) => {
    // console.log('req.body', req.body);
    data.push(req.body);
    res.json(data)
  })

  // DESTROY
  router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data);
  })

  // UPDATE
  router.put('/:id', (req, res) => {
    // teas[req.params.id] = req.body;
    data.splice(req.params.id, 1, req.body)
    res.json(data);
  });

  return router;
};

module.exports = createRouter;
