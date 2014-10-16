module.exports = function(config) {
	config.set({

		basePath : './',

		files : [ 'app/bower_components/angular/angular.js',
				'app/bower_components/angular-route/angular-route.js',
				'app/bower_components/angular-mocks/angular-mocks.js',
				'app/scripts/*.js', 'app/scripts/test/*.js' ],

		autoWatch : true,

		// coverage reporter generates the coverage
		reporters : [ 'progress', 'coverage' ],

		preprocessors : {
			// source files, that we want to generate coverage for
			// excluding tests or libraries
			'app/scripts/*.js' : [ 'coverage' ]
		},

		// Configure the reporter
		coverageReporter : {
			type : 'html',
			dir : 'coverage/'
		},

		frameworks : [ 'jasmine' ],

		browsers : [ 'Chrome' ],

		plugins : [ 'karma-chrome-launcher', 'karma-firefox-launcher',
				'karma-jasmine', 'karma-junit-reporter', 'karma-coverage' ],

		junitReporter : {
			outputFile : 'test_out/unit.xml',
			suite : 'unit'
		}

	});
};
