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
		function($scope, $http, $routeParams, $route, $modal, ProfileService) {
			$scope.providerSrchStr = '';
			$scope.selectedProvider = $routeParams.provider_id;
			$scope.profileCount = 0;
			var singleCheck = false;
			$scope.singleCheck = singleCheck;
			var multiCheck = false;
			$scope.multiCheck = multiCheck;
			var allChecked = false;
			$scope.allChecked = allChecked;
			$scope.confirmationAlert = '';

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

			$scope.closeAlert = function() {
				$scope.confirmationAlert = '';
			};
			
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
					$scope.singleCheck = false;
					$scope.multiCheck = false;

					// check all check boxes when check all is True
					// except the
					// default profile
					angular.forEach($scope.profiles, function(profile) {
						if (profile['type'] !== 'default_video')
							profile['checked'] = true;
					});
				} else {
					$scope.singleCheck = false;
					$scope.multiCheck = false;
					// uncheck all check boxes when check all is False
					angular.forEach($scope.profiles, function(profile) {
						profile['checked'] = false;
					});
				}
			};

			$scope.makeDefault = function(profile_id) {

				$http({
					method : 'PUT',
					url : 'http://' + IP + ':3000/api/profile/' + profile_id,
					data : {
						'profile_type' : 'default_video',
						'provider_id' : $scope.selectedProvider
					},
					headers : {
						'content-type' : 'application/json'
					}
				}).success(function(data) {
					// $route.reload();
					// Refresh profile data on the page to reflect changed
					// default selection
					ProfileService.getProfiles($routeParams.provider_id).then(
							function(data) {
								$scope.profiles = data;
							}).then(function() {
						$scope.profileCount = $scope.profiles.length;
						$scope.singleCheck = false;
						$scope.multiCheck = false;
						$scope.allChecked = false;

						angular.forEach($scope.profiles, function(profile) {
							profile['checked'] = false;
						});
					});
				});
			};
			
			// removes a single profile
			$scope.removeProfile =  function(profile_id) {
				console.log(profile_id);

				$http({
					method : 'DELETE',
					url : 'http://' + IP + ':3000/api/profile/' + profile_id,
					headers : {
						'content-type' : 'application/json'
					}
				}).success(function(data) {

					$scope.confirmationAlert = data[0].msg;

					// Refresh profile data on the page to reflect removed
					// profile
					ProfileService.getProfiles($routeParams.provider_id).then(
							function(data) {
								$scope.profiles = data;
							}).then(function() {
						$scope.profileCount = $scope.profiles.length;
						$scope.singleCheck = false;
						$scope.multiCheck = false;
						$scope.allChecked = false;

						angular.forEach($scope.profiles, function(profile) {
							profile['checked'] = false;
						});
					});
				});
			};
			
			
			// removes multiple profiles
			$scope.removeProfiles =  function() {
				
				var markedForDelProfiles = $scope.profiles.filter(function(profile) {
					return profile['checked'] === true
				});
				
				console.log(markedForDelProfiles);

				$http({
					method : 'DELETE',
					url : 'http://' + IP + ':3000/api/profile/',
					data : {
						'profiles' :  markedForDelProfiles						
					},
					headers : {
						'content-type' : 'application/json'
					}
				}).success(function(data) {
					
					$scope.confirmationAlert = data[0].msg;
					
					// Refresh profile data on the page to reflect removed profile
					ProfileService.getProfiles($routeParams.provider_id).then(
							function(data) {
								$scope.profiles = data;
							}).then(function() {
						$scope.profileCount = $scope.profiles.length;
						$scope.singleCheck = false;
						$scope.multiCheck = false;
						$scope.allChecked = false;

						angular.forEach($scope.profiles, function(profile) {
							profile['checked'] = false;
						});
					});
				});
			};
			
			// Handles creation of modal window for storage config view
			$scope.openStorageConfigModal = function (size) {
				console.log('inside modal open function');
			    var storageConfigmodalInstance = $modal.open({
			      templateUrl: 'storage_config.html',
			      controller: 'storageconfigCntrl',
			      size: size
			      });
			    };			
		});
