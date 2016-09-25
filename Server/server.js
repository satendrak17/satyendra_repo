/**
 * Created by abc on 24/09/2016.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),

    _ = require('lodash');

var app = express();

mongoose.connect('mongodb://localhost:27017/meancruddemo'); //meancruddemo is name of the database.

app.listen(3000, function () {
    console.log("Listening on port number 3000");
});

// CORS support

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.models = require('./Models/ModelsList'); // Now we have all the models on app for anywhere access.

// Load all the routes
var routes = require('./routes');

// to iterate over all the routes and load we need lodash.js dependency
_.each(routes, function (controller, route) {
    console.log("in _.each-- controller, route", controller, route);
    app.use(route, controller(app, route));
})
// Basic route
app.use('/hello', function (req, res) {
    res.send('Hello Satyendra Swarnkar!!!');
});
