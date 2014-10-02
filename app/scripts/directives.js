'use strict';

angular.module('profileApp.directives', [ 'ngRoute' ])

.directive('focus', function() {
	return {
		link : function(scope, element, attrs) {
			element[0].focus();
		}
	};
});