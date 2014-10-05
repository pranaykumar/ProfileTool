'use strict';

angular.module('profileApp.directives', [ 'ngRoute' ])

.directive('focus', function() {
	return {
		link : function(scope, element, attrs) {
			element[0].focus();
		}
	};
})

.directive('profileHover', function($compile) {
	return {
		restrict : 'A',
		link : function(scope, element) {
			element.bind('mouseover', function() {
				element.removeClass('MyClass1');
				element.addClass('MyClass');
			});

			element.bind('mouseout', function() {
				element.removeClass('MyClass');
				element.addClass('MyClass1');
			});	
		}
	}
})

.directive('tableRowhover', function($compile) {
	return {
		restrict : 'A',
		link : function(scope, element) {
			element.bind('mouseover', function() {
				element.removeClass('rowout');
				element.addClass('rowhover');
			});

			element.bind('mouseout', function() {
				element.removeClass('rohover');
				element.addClass('rowout');
			});	
		}
	}
});