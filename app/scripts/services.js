'use strict';

angular.module('profileApp.services', [ 'ngRoute' ])

.factory(
		'ProviderService',
		function($http, $q) {
			return {
				getProviders : function(providerSrchStr) {
					return $http.get(
							'http://' + IP + ':3000/api/providersearch/'
									+ providerSrchStr).then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;
						} else {
							// invalid response
							return $q.reject(response.data);
						}

					}, function(response) {
						// something went wrong
						return $q.reject(response.data);
					});
				},
				getProvider : function(provider_id) {
					return $http.get(
							'http://' + IP + ':3000/api/providers/'
									+ provider_id).then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;
						} else {
							// invalid response
							return $q.reject(response.data);
						}

					}, function(response) {
						// something went wrong
						return $q.reject(response.data);
					});
				}
			};
		})

.factory(
		'ProfileService',
		function($http, $q) {
			return {
				getProfiles : function(provider_id) {
					return $http.get(
							'http://' + IP + ':3000/api/providers/'
									+ provider_id + '/profiles').then(
							function(response) {
								if (typeof response.data === 'object') {
									return response.data;
								} else {
									// invalid response
									return $q.reject(response.data);
								}

							}, function(response) {
								// something went wrong
								return $q.reject(response.data);
							});
				},
				getProfile : function(profile_id) {
					return $http.get(
							'http://' + IP + ':3000/api/profile/'
									+ profile_id).then(
							function(response) {
								if (typeof response.data === 'object') {
									return response.data;
								} else {
									// invalid response
									return $q.reject(response.data);
								}

							}, function(response) {
								// something went wrong
								return $q.reject(response.data);
							});
				}
			};
		});
