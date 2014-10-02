'use strict';

// Declare app level module which depends on views, and components
angular.module('profileApp', [
  'ngRoute',
  'ui.bootstrap',
  'profileApp.directives',
  'profileApp.provider_search',
  'profileApp.dashboard',
  'profileApp.storageconfig'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/providers'});
}]);

//Helios REST API IP
var IP = '192.168.2.2';