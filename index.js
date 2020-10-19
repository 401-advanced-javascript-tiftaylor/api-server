
'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;


router.render = (req, res) => {
  res.jsonp({
    results: res.locals.data,
    count: res.locals.data.length,
  })
}


server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});