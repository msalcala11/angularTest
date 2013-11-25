function AppCtrl ($scope) {
    $scope.setActive = function(menuItem) {
	$scope.destinationsActive = '';
	$scope.flightsActive = '';
	$scope.reservationsActive = '';

	$scope[menuItem + 'Active'] = 'active';
    }


    $scope.airports = {
	"PDX": {
	    "code": "PDX",
	    "name": "Portland International Airport",
	    "city": "Portland",
	    "destinations": [
		"LAX",
		"SFO"
	    ]
	},
	"STL": {
	    "code": "STL",
	    "name": "Lambert-St. Louis International Aiport",
	    "city": "St. Louis",
	    "destinations": [
		"LAX",
		"MKE"
	    ]
	},
	"MCI": {
	    "code": "MCI",
	    "name": "Kansas City International Airport",
	    "city": "Kansas City",
	    "destinations": [
		"LAX",
		"SFO"
	    ]
	},
    }
    
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

}
