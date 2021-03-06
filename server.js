var express = require('express'),
  app = express(),

  port = process.env.PORT || 3000,

  mongoose = require('mongoose'),

  Task = require('./api/models/model.js'),

  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');

routes(app);


app.listen(port);

console.log(`Todo API started on Port: ${port}`);