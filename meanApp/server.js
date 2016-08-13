var express = require("express");
var mongojs = require("mongojs");//.connect("localhost/test",['test']);
//var MongoClient = require('mongodb').MongoClient;

var db = mongojs('test',['meanApp']);
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/data',function(req, res) {
	console.log('got a get request');
	//var data = [{name:'satyendra'}];
	var data = db.meanApp.find(function(err, data) {
		console.log("data", data);
		console.log("err", err);
		res.json(data);
	});
});


app.listen(3000);
console.log("server started... from sub branch");