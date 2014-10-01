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

.controller('storageconfigCntrl', function($scope) {
	$scope.storageTypeStub = storageTypeStub;
});

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
