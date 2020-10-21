'use strict';

function serverErr(err, req, res, next){

  res.status(500).send('500 Server Error!');
}

module.exports = serverErr;