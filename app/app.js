'use strict';

// Declare app level module which depends on views, and components
angular.module('profileApp', [
  'ngRoute',
  'profileApp.dashboard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/providers'});
}]);

//Helios REST API IP
var IP = '172.21.248.67';