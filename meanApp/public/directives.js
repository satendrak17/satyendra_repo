myApp.directive("subMenus", function () {
	return {
		restrict : 'EA',
		replace : true,
		template : '<a ui-sref="#">{{menu.menuName}}</a>'+
					'<ul data-ng-if="((menu.subMenu).length > 0)">'+
						'<li data-ng-repeat="subMenu in menu.subMenu">'+
							'<a ui-sref="#">{{subMenu.subMenuItem}}</a>'+
						'</li>'+
					'</ul>'
	};
});