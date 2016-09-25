/**
 * Created by abc on 24/09/2016.
 */
var mongoose = require('mongoose');

var moviesSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    }

});
module.exports = moviesSchema;
