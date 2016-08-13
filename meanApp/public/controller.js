myApp.controller('MeanCtrl', function($scope, $http) {
	console.log("controller working..");
	$scope.name = "Satyendra";
	$scope.subMenu = '<a ui-sref="#">{{menu.menuName}}</a>'+
					'<ul data-ng-if="((menu.subMenu).length > 0)">'+
						'<li data-ng-repeat="subMenu in menu.subMenu">'+
							'<a ui-sref="#">{{subMenu.subMenuItem}}</a>'+
						'</li>'+
					'</ul>';

					$http.get('/data').success(function(data) {
			$scope.menuData = data[0].menu;
			console.log('data in controller', data);
		}).error(function (error) {
			console.error("error", error);
		});
	$scope.getCall = function() {
		console.log("controller working..");
		$http.get('/data').success(function(data) {
			$scope.menuData = data[0].menu;
			console.log('data in controller', data);
		}).error(function (error) {
			console.error("error", error);
		});
	};
}); 