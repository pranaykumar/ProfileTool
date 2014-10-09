'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe(
		'my app',
		function() {

			browser.get('#/index.html');

			it(
					'should automatically redirect to /providers when location hash/fragment is empty',
					function() {
						expect(browser.getLocationAbsUrl()).toMatch(
								"/providers");
					});

			describe(
					'provider search',
					function() {

						beforeEach(function() {
							browser.get('#/providers');
						});

						it('should render providers search page when user navigates to #/providers',
								function() {
									expect(element.all(by.css('[ng-controller] label')).first().getText()).toMatch('Search Provider');
								});
						
						it('should display error message when no matching provider is found for a search string',
								function() {
									element(by.model('providerSrchStr')).sendKeys('dummy\n');
									expect(element(by.className('alert')).isDisplayed()).toBeTruthy();
								});
						
						it('should display multiple records when more than one provider is found for a search string',
								function() {
									element(by.model('providerSrchStr')).sendKeys('STAR\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBeGreaterThan(1);
								});
						
						it('should display one records when exactly one provider is found for a search string',
								function() {
									element(by.model('providerSrchStr')).sendKeys('STARSPORTS\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBe(1);
								});
						
						it('should display multiple records when more than one provider is found for a Provider ID',
								function() {
									element(by.model('providerSrchStr')).sendKeys('100\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBeGreaterThan(1);
								});
						
						it('should display one records when exactly one provider is found for a Provider ID',
								function() {
									element(by.model('providerSrchStr')).sendKeys('1005\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBe(1);
								});
												
						it('should display multiple records when more than one provider is found for a Provider ID',
								function() {
									element(by.model('providerSrchStr')).sendKeys('digital\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBeGreaterThan(1);
								});
						

						it('should display one records when exactly one provider is found for a Provider ID',
								function() {
									element(by.model('providerSrchStr')).sendKeys('blue\n');
									var providerElems = element.all(by.repeater('provider in providers'));
									expect(providerElems.count()).toBe(1);
								});
					});
		});
