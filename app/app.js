'use strict';

// Declare app level module which depends on views, and components
angular.module('profileApp', [
  'ngRoute',
  'ui.bootstrap',
  'nsPopover',
  'profileApp.directives',
  'profileApp.services',
  'profileApp.filters',
  'profileApp.provider_search',
  'profileApp.dashboard',
  'profileApp.storageconfig',
  'profileApp.view_profile',
  'profileApp.edit_profile'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/providers'});
}])

.controller('breadcrumbController', function($http, $scope, $routeParams, ProviderService) {
	// Call to ProviderService to details of provider
	ProviderService.getProvider($routeParams.provider_id).then(
			function(data) {
				$scope.provider_name = data[0].name;
			});
});

//Helios REST API IP
var IP = '192.168.2.6';