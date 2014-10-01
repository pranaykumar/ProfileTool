'use strict';

angular
		.module('profileApp.dashboard', [ 'ngRoute' ])

		.config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/providers', {
				templateUrl : 'dashboard/dashboard.html',
				controller : 'providersCntrl'
			}).otherwise({
				redirectTo : '/providers'
			});
		} ])

		.controller(
				'providersCntrl',
				function($scope, $http, ProfileService) {
					$scope.providerSrchStr = '';
					$scope.providerSelected = false;

					$scope.searchProvider = function() {

						$scope.noProviderAlrtMsg = '';
						$scope.noProviderErr = false;

						$http
								.get(
										'http://' + IP
												+ ':3000/api/providersearch/'
												+ $scope.providerSrchStr)
								.success(
										function(data) {
											$scope.providers = data;
											console.log($scope.providers);
											if (data.length === 0) {
												$scope.noProviderAlrtMsg = "No Provider found for the given criteria!";
												$scope.noProviderErr = true;
											}
										});
					};

					$scope.getProfile = function(provider_id) {
						$scope.isProviderSelected = true;
						$scope.selectedProvider = provider_id;
						$scope.storageConfigStub = storageConfigStub;
						$scope.storageTypeStub = storageTypeStub;
						
						ProfileService.getProfiles(provider_id).then(
								function(data) {
									$scope.profiles = data;
								});
					};

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
				});

var storageConfigStub = {
	name : 'Storage Config 1',
	type : 'S3',
	bucket : 'https://s3.amazonaws.com/bucket/object',
	accessKeyId : 'test_id',
	key : 'test_key'
};

var storageTypeStub = [ {
	name : 'S3',
	id : '1'
}, {
	name : 'WebDav',
	id : '2'
}, {
	name : 'Netstorage',
	id : '3'
}, {
	name : 'Azure',
	id : '4'
}, {
	name : 'SFTP',
	id : '5'
} ];
