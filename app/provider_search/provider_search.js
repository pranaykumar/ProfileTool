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
				function($scope, $http, ProviderService) {
					$scope.providerSrchStr = '';
					$scope.providerSelected = false;

					$scope.searchProvider = function() {

						$scope.noProviderAlrtMsg = '';
						$scope.noProviderErr = false;

						ProviderService
								.getProviders($scope.providerSrchStr)
								.then(
										function(data) {
											$scope.providers = data;
											if (data.length === 0) {
												$scope.noProviderAlrtMsg = "No Provider found for the given criteria!";
												$scope.noProviderErr = true;
											}
										});
					};

				});
