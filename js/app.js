angular.module('nav', [])
    .config(navRouter);

function navRouter ($routeProvider){
    $routeProvider
	.when('/', {
	    templateUrl: 'partials/coachsearch.html',
	    controller: function($scope) {
		$scope.setActive('coachsearch');
	    }})
	.when('/airports/:airportCode', {
	    templateUrl: 'partials/airport.html',
	    controller: 'AirportCtrl'
	    })
	.when('/favorites', {template: '<h3>My Favorites</h3>',
			   controller: function($scope) {
			       $scope.setActive('favorites');
			   }})
	.when('/messages', {template: '<h3>My Messages</h3>',
				controller: function($scope) {
				    $scope.setActive('messages');
				}})
}
