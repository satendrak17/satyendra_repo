/**
 * Created by abc on 24/09/2016.
 */
// Will use the movie model
//var resource = require('resourcejs');
var restful = require('node-restful');

module.exports = function (app, route) {
    
    // Setup the controller
    //resource(app,route,app.models.movie).rest();
    var rest = restful.model(
        'movies',
        app.models.movies
    ).methods(['get','put','post','delete']);
    rest.register(app,route);
   /* app.models.movie.find({}, function (err, result) {
        console.log('result of the response', result);
    });*/

    // Return the middleware
    return function (req, res, next) {
        //res.send('vdfvdfvdfxbvdfbvdzf');
        next();
    }
}