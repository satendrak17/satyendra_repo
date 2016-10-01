'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovierouteCtrl
 * @description
 * # MovierouteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovierouteCtrl', function ($scope, Movie) {
    function getAllMovies() {
      var moviesList = Movie.getList();
      moviesList.then(function (data) {
        console.log('moviesList in response', data.plain());
      })
    }

    $scope.postMovie = function () {
      console.log('Movie--', Movie)
      Movie.post({title:'Satyendra', url : 'https://Satyendra.com'});
      getAllMovies();
    }
  });
