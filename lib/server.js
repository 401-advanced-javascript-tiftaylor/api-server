'use strict';

const express = require('express');
const app = express();

const timeStamp = require('../middleware/timestamp.js')
const logger = require('../middleware/logger.js')
const notFound = require('../middleware/404.js')
const serverErr = require('../middleware/500.js')
const api = require('../routes/api.js');


app.use(express.json());
// run at app level for all routes
app.use(timeStamp);
app.use(logger);

app.use(api);

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