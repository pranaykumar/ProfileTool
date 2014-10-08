'use strict';

// Declare app level module which depends on views, and components
angular.module('profileApp', [
  'ngRoute',
  'ui.bootstrap',
  'nsPopover',
  'profileApp.directives',
  'profileApp.provider_search',
  'profileApp.dashboard',
  'profileApp.storageconfig',
  'profileApp.view_profile'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/providers'});
}]);

//Helios REST API IP
var IP = '172.21.248.61';