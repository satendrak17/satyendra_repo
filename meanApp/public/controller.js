myApp.controller('MeanCtrl', function($scope, $http) {
	console.log("controller working..");
	$scope.name = "Satyendra";
	$scope.getCall = function() {
		console.log("controller working..");
		$http.get('/data').success(function(data){
			console.log('data from server js',data[0].name);
		})
	};
}); 