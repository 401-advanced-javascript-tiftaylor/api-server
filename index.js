
'use strict';

require('dotenv').config()

const server = require('./lib/server.js');
const PORT = process.env.PORT || 3003;
server.start(PORT);
