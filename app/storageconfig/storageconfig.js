'use strict';

angular.module('profileApp.storageconfig', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/storageconfig', {
		templateUrl : 'storageconfig/storageconfig.html',
		controller : 'storageconfigCntrl'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller('storageconfigCntrl', function($scope, $routeParams, ProviderService) {
	$scope.storageTypeStub = storageTypeStub;
	$scope.storageConfigStub = storageConfigStub;
	$scope.selectedProvider = $routeParams.provider_id;
	$scope.selectedStorageOption = 'Default';

	$scope.updateStorageOption = function(selectedStorageOption) {
		$scope.selectedStorageOption = selectedStorageOption;
	};

	// Call to ProviderService to details of provider
	ProviderService.getProvider($routeParams.provider_id).then(function(data) {
		$scope.provider_name = data[0].name;
	});
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
