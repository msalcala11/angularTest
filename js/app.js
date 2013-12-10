var app = angular.module('nav', ['ui.bootstrap', 'ui.slider'])
    .config(navRouter);

app.factory('colorpicker', function () {
    function hexFromRGB(r, g, b) {
	var hex = [r.toString(16), g.toString(16), b.toString(16)];
	angular.forEach(hex, function(value, key) {
	    if (value.length === 1) hex[key] = "0" + value;
	    });
	return hex.join('').toUpperCase();
	}
    return {
	refreshSwatch: function (r, g, b) {
	    var color = '#' + hexFromRGB(r, g, b);
	    angular.element('#swatch').css('background-color', color);
	    }
	};
    });
app.controller('sliderDemoCtrl', function($scope, colorpicker) {
    function refreshSwatch (ev, ui) {
	var red = $scope.colorpicker.red,
	green = $scope.colorpicker.green,
	blue = $scope.colorpicker.blue;
	colorpicker.refreshSwatch(red, green, blue);
	}

    $scope.demoVals = {
	sliderExample1:     14,
	sliderExample4:     14,
	sliderExample5:     50,
	sliderExample8:     0.34,
	sliderExample9:     [-0.52, 0.54],
	sliderExample10:     -0.37
	};

    $scope.colorpicker = {
	red: 255,
	green: 140,
	blue: 60,
	options: {
	    orientation: 'horizontal',
	    min: 0,
	    max: 255,
	    range: 'min',
	    change: refreshSwatch,
	    slide: refreshSwatch
	    }
	};
    });

app.filter('distanceFilter', function() {
  return function(coaches, distance) {
    var filtered = [];
      
      angular.forEach(coaches, function(coach) {
	if(parseInt(coach.distance) <= distance) {
          filtered.push(coach);
	   
	}
    });
      return filtered;
  };
});


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
