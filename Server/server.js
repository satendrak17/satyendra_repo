/**
 * Created by abc on 24/09/2016.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),

    _ = require('lodash');

var app = express();

mongoose.connect('mongodb://localhost:27017/meancruddemo'); //meancruddemo is name of the database.

app.listen(3000, function () {
    console.log("Listening on port number 3000");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));
// CORS support

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json')
    next();
});
app.models = require('./Models/ModelsList'); // Now we have all the models on app for anywhere access.

// Load all the routes
var routes = require('./routes');

// to iterate over all the routes and load we need lodash.js dependency
_.each(routes, function (controller, route) {
    app.use(route, controller(app, route));
})
// Basic route
app.use('/', function (req, res) {
    console.log('Send indx.html as response');
    response.sendFile(__dirname + '/client/app/index.html');
});
