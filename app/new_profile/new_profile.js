'use strict';

angular.module('profileApp.new_profile', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/newprofile', {
		templateUrl : 'new_profile/new_profile.html',
		controller : 'newProfileController'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller('newProfileController',
		function($scope, $routeParams, $http, ProfileService) {
			$scope.selectedProvider = $routeParams.provider_id;
			$scope.templates = [ {
				'id' : 0,
				'name' : 'Select a  template or create custom'
			}, {
				'id' : 1,
				'name' : 'Default'
			}, {
				'id' : 2,
				'name' : 'Custom'
			} ];

			$scope.profile = {
				"id" : null,
				"profile_id" : "",
				"name" : "",
				"type" : "video",
				"private" : 0,
				"deinterlace_input" : null,
				"frame_rate" : 60.0,
				"mezzanine_multipass_encoding" : null,
				"image_interval_sec" : null,
				"custom_image_widths" : "",
				"override_source" : null,
				"stream_type" : "",
				"streams" : []
			}
			$scope.selectedTemplate = $scope.templates[0];

			$scope.updateTemplateOption = function(templateIndex) {
				$scope.selectedTemplate = $scope.templates[templateIndex];
			};

			$scope.createProfile = function() {
				console.log($scope.profile);
				
				$http(
						{
							method : 'POST',
							url : 'http://' + IP + ':3000/api/profile/',
							data : {
								'profile' : $scope.profile,
								'provider' : $scope.selectedProvider
							},
							headers : {
								'content-type' : 'application/json'
							}
						}).success(function(data) {
					alert(data[0].msg);
				});
			};
		});