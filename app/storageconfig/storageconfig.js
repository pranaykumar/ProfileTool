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

.controller('storageconfigCntrl', function($scope, $routeParams) {
	$scope.storageTypeStub = storageTypeStub;
	$scope.storageConfigStub = storageConfigStub;
	$scope.selectedProvider = $routeParams.provider_id;
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
