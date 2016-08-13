//var myApp2 = angular.module('myApp2', []);

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state ('home', {
		url : "/home",
		templateUrl : "home.html"
	})


});