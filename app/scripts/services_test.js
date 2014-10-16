"use strict";
var IP = '172.21.248.61';
describe("ProviderService of profileApp.services module", function() {
	var mockProviderService, httpBackend;

	beforeEach(module("profileApp.services"));

	beforeEach(inject(function(_ProviderService_, $httpBackend) {
		mockProviderService = _ProviderService_;
		httpBackend = $httpBackend;
	}));

	it("should get all providers mathcing the search crieteria", function() {
		httpBackend.whenGET("http://" + IP + ":3000/api/providersearch/11")
				.respond({
					name : 'starsports',
					provider_id : '111',
					email : 'info@star.in',
					profile_count : '2'
				}, {
					name : 'MTV',
					provider_id : '1111',
					email : 'support@mtv.com',
					profile_count : '1'
				});
		mockProviderService.getProviders("11").then(function(providers) {
			expect(providers).toEqual({
				name : 'starsports',
				provider_id : '111',
				email : 'info@star.in',
				profile_count : '2'
			}, {
				name : 'MTV',
				provider_id : '1111',
				email : 'support@mtv.com',
				profile_count : '1'
			});
		});
		httpBackend.flush();
	});

	it("should get specific provider when Provider id used for search",
			function() {
				httpBackend.whenGET("http://" + IP + ":3000/api/providers/333")
						.respond({
							name : 'starsports1',
							provider_id : '333',
							email : 'info@star.in',
							profile_count : '2'
						});

				mockProviderService.getProvider("333").then(function(provider) {

					expect(provider).toEqual({
						name : 'starsports1',
						provider_id : '333',
						email : 'info@star.in',
						profile_count : '2'
					});
				});

				httpBackend.flush();
			});

});

describe(
		"ProfileService of profileApp.services module",
		function() {

			var mockProviderService, httpBackend;

			beforeEach(module("profileApp.services"));

			beforeEach(inject(function(_ProfileService_, $httpBackend) {

				mockProviderService = _ProfileService_;
				httpBackend = $httpBackend;
			}));

			it(
					"should get all profiles for specific provider id",
					function() {
						httpBackend
								.whenGET(
										"http://"
												+ IP
												+ ":3000/api/providers/111/profiles")
								.respond(
										[
												{
													"profile_id" : "77472075-2d06-11e4-a599-1078d24a5935",
													"name" : "4-Stream",
													"type" : "video",
													"private" : 0,
													"deinterlace_input" : 1,
													"frame_rate" : 30,
													"mezzanine_multipass_encoding" : 1,
													"streams" : []
												},
												{
													"profile_id" : "774724fb-2d06-11e4-a599-1078d24a5935",
													"name" : "generic",
													"type" : "video",
													"private" : 1,
													"deinterlace_input" : 1,
													"frame_rate" : 25,
													"mezzanine_multipass_encoding" : 1,
													"streams" : [ {
														"id" : 2,
														"stream_id" : "ad7bff02-2e79-11e4-9c3a-1078d24a5935",
														"name" : "HTTP Live Streaming audio + video",
														"muxing_format" : "ts",
														"profile" : "baseline",
														"audio_sample_rate" : 44100,
														"audio_bitrate" : 64,
														"video_bitrate" : 300,
														"video_width" : 640,
														"keyframe_interval_sec" : 5,
														"watermark" : null,
														"multipass_encoding" : 1,
														"segment_length_sec" : 5,
														"encrypt" : 1,
														"key_rotation_period" : 6,
														"video_encryption_level" : null,
														"stream_type" : "single",
														"encode_width" : 576,
														"h266_profile" : "iphone"
													} ]
												} ]);
						mockProviderService
								.getProfiles("111")
								.then(
										function(providers) {
											expect(providers)
													.toEqual(
															[
																	{
																		"profile_id" : "77472075-2d06-11e4-a599-1078d24a5935",
																		"name" : "4-Stream",
																		"type" : "video",
																		"private" : 0,
																		"deinterlace_input" : 1,
																		"frame_rate" : 30,
																		"mezzanine_multipass_encoding" : 1,
																		"streams" : []
																	},
																	{
																		"profile_id" : "774724fb-2d06-11e4-a599-1078d24a5935",
																		"name" : "generic",
																		"type" : "video",
																		"private" : 1,
																		"deinterlace_input" : 1,
																		"frame_rate" : 25,
																		"mezzanine_multipass_encoding" : 1,
																		"streams" : [ {
																			"id" : 2,
																			"stream_id" : "ad7bff02-2e79-11e4-9c3a-1078d24a5935",
																			"name" : "HTTP Live Streaming audio + video",
																			"muxing_format" : "ts",
																			"profile" : "baseline",
																			"audio_sample_rate" : 44100,
																			"audio_bitrate" : 64,
																			"video_bitrate" : 300,
																			"video_width" : 640,
																			"keyframe_interval_sec" : 5,
																			"watermark" : null,
																			"multipass_encoding" : 1,
																			"segment_length_sec" : 5,
																			"encrypt" : 1,
																			"key_rotation_period" : 6,
																			"video_encryption_level" : null,
																			"stream_type" : "single",
																			"encode_width" : 576,
																			"h266_profile" : "iphone"
																		} ]
																	} ]);
										});
						httpBackend.flush();
					});

			it(
					"should get the details for a specific Profile id",
					function() {
						httpBackend
								.whenGET(
										"http://"
												+ IP
												+ ":3000/api/profile/77472075-2d06-11e4-a599-1078d24a5935")
								.respond(
										{
											"profile_id" : "77472075-2d06-11e4-a599-1078d24a5935",
											"name" : "4-Stream",
											"type" : "video",
											"private" : 0,
											"deinterlace_input" : 1,
											"frame_rate" : 30,
											"mezzanine_multipass_encoding" : 1,
											"streams" : []
										});
						mockProviderService
								.getProfile(
										"77472075-2d06-11e4-a599-1078d24a5935")
								.then(
										function(providers) {
											expect(providers)
													.toEqual(
															{
																"profile_id" : "77472075-2d06-11e4-a599-1078d24a5935",
																"name" : "4-Stream",
																"type" : "video",
																"private" : 0,
																"deinterlace_input" : 1,
																"frame_rate" : 30,
																"mezzanine_multipass_encoding" : 1,
																"streams" : []
															});
										});
						httpBackend.flush();
					});

		});
