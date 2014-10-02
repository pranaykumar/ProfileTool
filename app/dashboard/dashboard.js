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

			// Call the service and wait for it to finish and then
			// populate the Profiles variable in scope using a callback
			ProfileService.getProfiles($routeParams.provider_id).then(
					function(data) {
						$scope.profiles = data;
					});

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
