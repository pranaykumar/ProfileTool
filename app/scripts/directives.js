'use strict';

angular.module('profileApp.directives', [ 'ngRoute' ])

.directive('focus', function() {
	return {
		link : function(scope, element, attrs) {
			element[0].focus();
		}
	};
})

.directive('profileRowhover', function($compile) {
	return {
		restrict : 'A',
		link : function(scope, element) {
			element.bind('mouseover', function() {
				element.find('a').parent().removeClass('hideonhover');
				element.find('a').parent().addClass('showonhover');
			});

			element.bind('mouseout', function() {
				element.find('a').parent().removeClass('showonhover');
				element.find('a').parent().addClass('hideonhover');
			});
		}
	}
})

.directive('providerRowhover', function($compile) {
	return {
		restrict : 'A',
		link : function(scope, element) {
			element.bind('mouseover', function() {
				element.find('a').parent().removeClass('hideonhover');
				element.find('a').parent().addClass('showonhover');
				
				element.find('span').parent().removeClass('showonhover');
				element.find('span').parent().addClass('hideonhover');
			});

			element.bind('mouseout', function() {
				element.find('a').parent().removeClass('showonhover');
				element.find('a').parent().addClass('hideonhover');
				
				element.find('span').parent().removeClass('hideonhover');
				element.find('span').parent().addClass('showonhover');
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