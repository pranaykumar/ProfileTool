'use strict';

angular.module('profileApp.edit_profile', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/profile/:profile_id/edit', {
		templateUrl : 'edit_profile/edit_profile.html',
		controller : 'editProfileController'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller(
		'editProfileController',
		function($scope, $routeParams, ProfileService) {
			// $scope.streams = streams;
			// $scope.profile = profile;
			$scope.selectedProvider = $routeParams.provider_id;
			$scope.selectedProfile = $routeParams.profile_id;

			// get data for profile and associated streams
			ProfileService.getProfile($routeParams.profile_id).then(
					function(data) {
						$scope.profile = data[0];
						$scope.streams = data[0].streams;
						$scope.selectedStream = $scope.profile.streams[0];
					});


			$scope.updateStreamOption = function(streamIndex) {
				$scope.selectedStream = $scope.streams[streamIndex];
			}
		});

