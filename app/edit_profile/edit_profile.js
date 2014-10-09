'use strict';

angular.module('profileApp.edit_profile', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/providers/:provider_id/profile/:profile_id/edit', {
		templateUrl : 'edit_profile/edit_profile.html',
		controller : 'editProfileController'
	}).otherwise({
		redirectTo : '/providers'
	});
} ])

.controller('editProfileController', function($scope, $routeParams) {
	$scope.streams = streams;
	$scope.profile = profile;
	$scope.selectedProvider = $routeParams.provider_id;
	$scope.selectedProfile = $routeParams.profile_id;
});

// stubbed data for streams. This will be pulled from the REST api in production

var profile = {
	"image_interval_sec" : "100s",
	"custom_image_widths" : "96, 100, 180",
	"watermarks" : "Default",
	"position" : "Bottom",
	"deinterlace_input" : "Active",
	"override_source": "Inactive",
	"multipass_encoding" : "Inactive"
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
	"stream_id" : "3",
	"name" : "HTTP Live Streaming audio + video",
	"stream_type" : "single",
	"encode_width" : 576,
	"h266_profile" : "iphone",
	"muxing_format" : "ts",
	"profile" : "baseline",
	"audio_sample_rate" : 44100,
	"audio_bitrate" : 64,
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
	"stream_id" : "4",
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