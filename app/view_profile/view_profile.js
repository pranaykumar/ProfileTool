'use strict';

angular.module('profileApp.view_profile', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/profile/:profile_id', {
		templateUrl : 'view_profile/view_profile.html',
		controller : 'viewProfileController'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller(
		'viewProfileController',
		function($scope, $routeParams, ProfileService) {
			//$scope.streams = streams;
			//$scope.profile = viewprofile;
			$scope.selectedProvider = $routeParams.provider_id;
			$scope.selectedProfile = $routeParams.profile_id;
			
			// get data for profile and associated streams
			ProfileService.getProfile($routeParams.profile_id).then(
					function(data) {
						$scope.profile = data[0];
						$scope.streams = data[0].streams;

						$scope.profile.watermarks = [ {
							"url" : "Default"
						}, {
							"url" : "http://domain.com/img/watermark1.jpg"
						} ];
					});
		});