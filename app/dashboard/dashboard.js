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
		function($scope, $http, $routeParams, ProfileService) {
			$scope.providerSrchStr = '';
			$scope.storageConfigStub = storageConfigStub;
			$scope.storageTypeStub = storageTypeStub;
			$scope.selectedProvider = $routeParams.provider_id;
			var singleCheck = false;
			$scope.singleCheck = singleCheck;
			var allChecked = false;
			$scope.allChecked = allChecked;

			// Call the service and wait for it to finish and then
			// populate the Profiles variable in scope using a callback
			ProfileService.getProfiles($routeParams.provider_id).then(
					function(data) {
						$scope.profiles = data;
					});

			$scope.updateCheckFlag = function(profile_type) {
				if (profile_type != 'default_video')
					$scope.singleCheck = !$scope.singleCheck
			};

			$scope.checkAll = function() {
				$scope.allChecked = !$scope.allChecked;
				$scope.singleCheck = false;
			}

		})

.factory(
		'ProfileService',
		function($http, $q) {
			return {
				getProfiles : function(provider_id) {
					// the $http API is based on the deferred/promise
					// APIs
					// exposed by
					// the $q service
					// so it returns a promise for us by default
					return $http.get(
							'http://' + IP + ':3000/api/providers/'
									+ provider_id + '/profiles').then(
							function(response) {
								if (typeof response.data === 'object') {
									return response.data;
								} else {
									// invalid response
									return $q.reject(response.data);
								}

							}, function(response) {
								// something went wrong
								return $q.reject(response.data);
							});
				}
			};
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
