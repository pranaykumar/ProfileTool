'use strict';

angular
		.module('profileApp.provider_search', [ 'ngRoute' ])

		.config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/providers', {
				templateUrl : 'provider_search/provider_search.html',
				controller : 'providerSearchController'
			}).otherwise({
				redirectTo : '/providers'
			});
		} ])

		.controller(
				'providerSearchController',
				function($scope, $http) {
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

				})

		.filter('nullNumberFormatter', function() {
			var myNullNumberFormatter = function(input) {
				if (input === null)
					return 0;
				else
					return input;
			};
			return myNullNumberFormatter;
		});
