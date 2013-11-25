function AppCtrl ($scope) {
    $scope.setActive = function(menuItem) {
	$scope.coachsearchActive = '';
	$scope.favoritesActive = '';
	$scope.messagesActive = '';

	$scope[menuItem + 'Active'] = 'active';
    }


    $scope.coaches = {
	"000": {
	    "code": "000",
	    "name": "Mike Smith",
	    "city": "Atlanta",
	    "specialties": [
		"Basketball",
		"Shooting",
		"Leadership"
	    ]
	},
	"001": {
	    "code": "001",
	    "name": "John Doe",
	    "city": "St. Louis",
	    "specialties": [
		"Strength",
		"Power"
	    ]
	},
	"002": {
	    "code": "002",
	    "name": "Julie Brown",
	    "city": "Kansas City",
	    "specialties": [
		"Yoga",
		"Tai Chi"
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
