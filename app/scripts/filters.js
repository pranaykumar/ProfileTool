'use strict';

angular.module('profileApp.filters', [ 'ngRoute' ])

.filter('nullNumberFormatter', function() {
	var myNullNumberFormatter = function(input) {
		if (input === null)
			return 0;
		else
			return input;
	};
	return myNullNumberFormatter;
})

.filter('booleanFormatter', function() {
	var myBooleanFilter = function(input) {
		if (input == 1)
			return "True";
		else
			return "False";
	};
	return myBooleanFilter;
});