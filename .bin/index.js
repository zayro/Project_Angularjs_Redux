require('babel-register');
// set up ======================================================================
const express = require('express');
const app = express(); 						// create our app w/ express


const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Modules NodeJs
const http = require('http');
const dotenv = require('dotenv');

dotenv.load();

const port = process.env.PORT || 3000;

// configuration ===============================================================
app.use(express.static('./app')); 		// set the static files location /public/img will be /img for users
app.use(express.static('./node_modules'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
