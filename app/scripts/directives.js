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
				element.find('a').removeClass('hideonhover');
				element.find('a').addClass('showonhover');
				
				element.find('span').removeClass('showonhover');
				element.find('span').addClass('hideonhover');
			});

			element.bind('mouseout', function() {
				element.find('a').removeClass('showonhover');
				element.find('a').addClass('hideonhover');
				
				element.find('span').removeClass('hideonhover');
				element.find('span').addClass('showonhover');
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
				
				element.find('div').removeClass('hideonhover');
				element.find('div').addClass('showonhover');
			});

			element.bind('mouseout', function() {
				element.removeClass('rohover');
				element.addClass('rowout');
				
				element.find('div').removeClass('showonhover');
				element.find('div').addClass('hideonhover');
			});
		}
	}
});