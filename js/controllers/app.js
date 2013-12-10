function AppCtrl ($scope) {

  $scope.selected = undefined;
  $scope.states = ['Basketball', 'Shooting', 'Leadership', 'Strength', 'Power', 'Yoga', 'Tai Chi', 'Personal Trainer', 'Nutritionist', 'Registered Dietitian'];



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
	    ],
	    "distance": "10"
	},
	{
	    "code": "001",
	    "name": "John Doe",
	    "city": "St. Louis",
	    "specialties": [
		"Strength",
		"Power"
	    ],
	    "distance": "20"
	},
	{
	    "code": "002",
	    "name": "Julie Brown",
	    "city": "Kansas City",
	    "specialties": [
		"Yoga",
		"Tai Chi"
	    ],
	    "distance": "30"
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

    $scope.distance = 50;
    //the following allows to filter based on distance
/*    $scope.filterDistance = function(coach)
    {
	// Do some tests
	console.log("distance: " + $scope.distance);
	if(coach.distance < $scope.distance)
	{
            return true; // this will be listed in the results
	    console.log("made a true comparison");
	}
	
	return false; // otherwise it won't be within the results
    };*/
}
