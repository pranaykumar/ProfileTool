'use strict';

angular.module('profileApp.view_profile', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/profile/:profile_id', {
		templateUrl : 'view_profile/view_profile.html',
		controller : 'viewProfileController'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller('viewProfileController', function($scope, $routeParams) {
	$scope.streams = streams;
	$scope.profile = profile;
	$scope.selectedProvider = $routeParams.provider_id;
	$scope.selectedProfile = $routeParams.profile_id;
});

// stubbed data for streams. This will be pulled from the REST api in production

var profile = {
	"Play_Ready_Encryption" : "Off",
	"Add_Audio_Only_to_WVM" : "Off",
	"Flash_Access" : "Off",
	"Custom_Image_Width" : "96px",
	"Zencoder" : "On",
	"Duplicate_Check" : "On",
	"Flv_Post_Bit_Rate_Threshold" : 3000,
	"Encrypt_iOS_ABR" : "Off",
	"Bypass_Chunking" : "Off"
};

var streams = [ {
	"stream_id" : "1",
	"name" : "mp4",
	"stream_type" : "single",
	"encode_width" : 576,
	"h266_profile" : "iphone",
	"muxing_format" : "mp4",
	"profile" : "baseline",
	"audio_sample_rate" : 44100,
	"audio_bitrate" : 64,
	"video_bitrate" : 500,
	"video_width" : 640,
	"keyframe_interval_sec" : 5,
	"watermark" : "1",
	"multipass_encoding" : null,
	"segment_length_sec" : null,
	"encrypt" : null,
	"key_rotation_period" : null,
	"video_encryption_level" : null
}, {
	"stream_id" : "2",
	"name" : "HTTP Live Streaming audio + video",
	"stream_type" : "single",
	"encode_width" : 576,
	"h266_profile" : "iphone",
	"muxing_format" : "ts",
	"profile" : "baseline",
	"audio_sample_rate" : 44100,
	"audio_bitrate" : 128,
	"video_bitrate" : 800,
	"video_width" : 640,
	"keyframe_interval_sec" : 5,
	"watermark" : null,
	"multipass_encoding" : 1,
	"segment_length_sec" : 5,
	"encrypt" : 1,
	"key_rotation_period" : 6,
	"video_encryption_level" : null
},
{
	"stream_id" : "2",
	"name" : "HTTP Live Streaming audio + video",
	"stream_type" : "single",
	"encode_width" : 576,
	"h266_profile" : "iphone",
	"muxing_format" : "ts",
	"profile" : "baseline",
	"audio_sample_rate" : 44100,
	"audio_bitrate" : 128,
	"video_bitrate" : 800,
	"video_width" : 640,
	"keyframe_interval_sec" : 5,
	"watermark" : null,
	"multipass_encoding" : 1,
	"segment_length_sec" : 5,
	"encrypt" : 1,
	"key_rotation_period" : 6,
	"video_encryption_level" : null
},
{
	"stream_id" : "2",
	"name" : "HTTP Live Streaming audio + video",
	"stream_type" : "single",
	"encode_width" : 576,
	"h266_profile" : "iphone",
	"muxing_format" : "ts",
	"profile" : "baseline",
	"audio_sample_rate" : 44100,
	"audio_bitrate" : 128,
	"video_bitrate" : 800,
	"video_width" : 640,
	"keyframe_interval_sec" : 5,
	"watermark" : null,
	"multipass_encoding" : 1,
	"segment_length_sec" : 5,
	"encrypt" : 1,
	"key_rotation_period" : 6,
	"video_encryption_level" : null
}];