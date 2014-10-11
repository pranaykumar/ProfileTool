describe(
		'dashboard',
		function() {

			beforeEach(function() {
				browser.get('#/providers/111');
			});

			it(
					'should display breadcrumb when user navigates to provider dashboard (#/providers/111)',
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
									var buttonElems = element.all(by.className('buttonbar'));
									expect(buttonElems.first().isDisplayed()).toBeTruthy();
								});
					});
			
//			 it(
//					'should display links for view/edit buttons only when mouse hovered on default profile',
//					function() {
//						var profileRows = element.all(by.css('[ng-show="true"]'));
//						profileRows.first().then(
//								function(row) {
//									row.click();
//									row.findElement(by.tagName('a')).then(function(hoverlinks) {
//									      expect(hoverlinks.get(0).isDisplayed.toBeTruthy());
//									    });							
//									});
//					});
		});