describe(
		'dashboard',
		function() {

			beforeEach(function() {
				browser.get('#/providers/111');
			});

			it(
					'should display breadcrumb when user navigates to #/providers/111',
					function() {
						expect(
								element(by.className('breadcrumb'))
										.isDisplayed()).toBeTruthy();
					});

			it(
					'should have provider ID displayed in breadcrumb as sent in URL',
					function() {
						expect(
								element(by.binding('selectedProvider'))
										.getText()).toContain('111');
					});

			it(
					'should display links for make default/view/edit/remove for the selected provider',
					function() {
						var profileRows = element.all(by.tagName('tr'));
						profileRows.first().then(
								function(row) {
									row.click();
									var buttonElems = element.all(by
											.className('buttonbar'));
									expect(buttonElems.first().isDisplayed())
											.toBeTruthy();
								});
					});

			/*
			 * it('should display error message when no matching provider is
			 * found for a search string', function() {
			 * element(by.model('providerSrchStr')).sendKeys('aaa\n');
			 * expect(element(by.className('alert')).isDisplayed()).toBeTruthy();
			 * });
			 * 
			 * it('should display multiple records when more than one provider
			 * is found for a search string', function() {
			 * element(by.model('providerSrchStr')).sendKeys('ESPN\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBeGreaterThan(1);
			 * });
			 * 
			 * it('should display one records when exactly one provider is found
			 * for a search string', function() {
			 * element(by.model('providerSrchStr')).sendKeys('sky ESPN\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBe(1); });
			 * 
			 * it('should display multiple records when more than one provider
			 * is found for a Provider ID', function() {
			 * element(by.model('providerSrchStr')).sendKeys('100\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBeGreaterThan(1);
			 * });
			 * 
			 * it('should display one records when exactly one provider is found
			 * for a Provider ID', function() {
			 * element(by.model('providerSrchStr')).sendKeys('1005\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBe(1); });
			 * 
			 * it('should display multiple records when more than one provider
			 * is found for a Provider ID', function() {
			 * element(by.model('providerSrchStr')).sendKeys('digital\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBeGreaterThan(1);
			 * });
			 * 
			 * 
			 * it('should display one records when exactly one provider is found
			 * for a Provider ID', function() {
			 * element(by.model('providerSrchStr')).sendKeys('blue\n'); var
			 * providerElems = element.all(by.repeater('provider in
			 * providers')); expect(providerElems.count()).toBe(1); });
			 */
		});