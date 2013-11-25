function AppCtrl ($scope) {
    $scope.setActive = function(menuItem) {
	$scope.coachsearchActive = '';
	$scope.favoritesActive = '';
	$scope.messagesActive = '';

	$scope[menuItem + 'Active'] = 'active';
    }

    $scope.coaches = [
	{
	    "code": "000",
	    "name": "Mike Smith",
	    "city": "Atlanta",
	    "specialties": [
		"Basketball",
		"Shooting",
		"Leadership"
	    ]
	},
	{
	    "code": "001",
	    "name": "John Doe",
	    "city": "St. Louis",
	    "specialties": [
		"Strength",
		"Power"
	    ]
	},
	{
	    "code": "002",
	    "name": "Julie Brown",
	    "city": "Kansas City",
	    "specialties": [
		"Yoga",
		"Tai Chi"
	    ]
	}
	];//end of coaches object
    
    $scope.sidebarURL = "partials/airport.html";
    $scope.formURL = "partials/form.html";
    
    $scope.currentAirport = null;
    $scope.setAirport = function(code){
	$scope.currentAirport = $scope.airports[code];
    }
    $scope.editAirport = function(code){
	$scope.editing = $scope.airports[code];
	$scope.hide = function(){
	    $scope.editing = null;
	}
    }
    $scope.editAirport = function(code){
	$scope.editing = $scope.airports[code];
	$scope.hide = function(){
	    $scope.editing = null;
	}
    }

    $scope.phones = [
	{'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
	{'name': 'Motorola', 'snippet': 'The Next, Next Generation tablet.'},
	{'name': 'MOTOROLA XOOM', 'snippet': 'even better'}
  ];
}
