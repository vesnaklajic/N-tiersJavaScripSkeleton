
//server dépendencies
const express = require('express'),
//    bodyParser = require('body-parser');
  
//server routes/controllers
//const controllers = require('../controllers/index'),
routes = require('./routes/index');
//const app
const app = express();
//app use
app.use(routes(express, controllers));
//module exports
module.exports = app;









