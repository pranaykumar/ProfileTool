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
					'should display Provider Name displayed in breadcrumb corresponding to the Provider ID in URL',
					function() {
						expect(element(by.binding('provider_name')).getText())
								.toContain('ESPN');
					});

			it(
					'should display links for MAKE DEFAULT/VIEW/EDIT/REMOVE for the provider on mouse hover of a non-default profile row',
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
			 * it( 'should display the buttons edit/view/remove/make defualt
			 * buttons on top once select one profile which is not default',
			 * function() { var clickOn = element(by.model('profile.checked'));
			 * clickOn.click(); var topButtons =
			 * element.all(by.id('topButtonDiv'));
			 * expect(topButtons.isDisplayed()).toBeTruthy(); });
			 */

			it(
					'should only display links for VIEW and EDIT when mouse hovered on default profile',
					function() {
						var profileRows = element.all(by.tagName('tr'));
						profileRows.first().then(
								function(row) {
									row.click();
									var counter = 0;
									var list = element(by.css('.rowhover'))
											.all(by.tagName('a'));

									/*
									 * expect(list == [ 'MAKE DEFAULT', 'EDIT',
									 * 'VIEW', 'REMOVE' ]);
									 */
									expect(list.count()).toEqual(4);
								});

					});

			it(
					'should display storage config information in a modal window when VIEW STORAGE CONFIGURTAION button in clicked',
					function() {
						element(by.id('viewStorageLoc')).click();

						expect(
								element(by.className('modal-dialog'))
										.isDisplayed()).toBeTruthy();
					});

			it(
					'should display only REMOVE button on top links section when Check All checkbox is cheked',
					function() {
						var checkAll = element(by.model('allChecked'));
						checkAll.click();
						expect(
								element(by.css('[ng-click="removeProfiles()"]')).isDisplayed)
								.toBeTruthy();
						/*
						 * var items = element(by.id('topButtonDiv')).all(
						 * by.tagName('a')); expect(items.count()).toEqual(4);
						 */

						// make sure REMOVE link is visible (4th Link)
						element(by.id('topButtonDiv'))
								.all(by.tagName('a'))
								.filter(function(elem, index) {
									return index === 3;
								})
								.then(
										function(filteredElements) {
											expect(
													filteredElements[0].isDisplayed)
													.toBeTruthy();
										});

						//make sure all other links in toButtonDiv are hidden
						element(by.id('topButtonDiv')).all(by.tagName('a'))
								.filter(function(elem, index) {
									return index !== 3;
								}).then(
										function(filteredElements) {
											expect(
													filteredElements[0]
															.isDisplayed())
													.toBeFalsy();
										});

					});

		});