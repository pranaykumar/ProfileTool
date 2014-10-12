'use strict';

angular.module('profileApp.dashboard', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id', {
		templateUrl : 'dashboard/dashboard.html',
		controller : 'providersCntrl'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller(
		'providersCntrl',
		function($scope, $http, $routeParams, ProfileService, ProviderService) {
			$scope.providerSrchStr = '';
			$scope.selectedProvider = $routeParams.provider_id;
			$scope.profileCount = 0;
			var singleCheck = false;
			$scope.singleCheck = singleCheck;
			var multiCheck = false;
			$scope.multiCheck = multiCheck;
			var allChecked = false;
			$scope.allChecked = allChecked;

			// Call to ProviderService to details of provider
			ProviderService.getProvider($routeParams.provider_id).then(
					function(data) {
						$scope.provider_name = data[0].name;
					});

			// Call the service and wait for it to finish and then
			// populate the Profiles variable in scope using a callback
			ProfileService.getProfiles($routeParams.provider_id).then(
					function(data) {
						$scope.profiles = data;
					}).then(function() {
				$scope.profileCount = $scope.profiles.length;
				// Adding checked flag for each profile
				// which can then be used to bind the UI check box
				// controls
				angular.forEach($scope.profiles, function(profile) {
					profile['checked'] = false;
				});
			});

			$scope.updateCheckFlags = function(profile_type) {

				var checkedCount = $scope.profiles.filter(function(profile) {
					return profile['checked'] === true
				}).length;

				console.log('No, of profiles selected: ' + checkedCount);

				if (checkedCount == 0) {
					$scope.singleCheck = false;
					$scope.multiCheck = false;
					$scope.allChecked = false;
				} else {
					if (checkedCount == 1) {
						$scope.singleCheck = true;
						$scope.multiCheck = false;
						$scope.selectedProfile = $scope.profiles
								.filter(function(profile) {
									return profile['checked'] === true
								})[0].profile_id;
					} else {
						$scope.singleCheck = false;
						$scope.multiCheck = true;
					}
				}

			};

			$scope.checkAll = function() {
				$scope.allChecked = !$scope.allChecked;

				if ($scope.allChecked) {
					// check all check boxes when check all is True
					// except the
					// default profile
					angular.forEach($scope.profiles, function(profile) {
						if (profile['type'] !== 'default_video')
							profile['checked'] = true;
					});
				} else {
					// uncheck all check boxes when check all is False
					angular.forEach($scope.profiles, function(profile) {
						profile['checked'] = false;
					});
				}
			};

		});
