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

			/*it(
					'should have provider ID displayed in breadcrumb as sent in URL',
					function() {
						expect(
								element(by.binding('selectedProvider'))
										.getText()).toContain('111');
					});*/

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

		/*	it(
					'should display the buttons edit/view/remove/make defualt buttons on top once select one profile which is not default',
					function() {
						var clickOn = element(by.model('profile.checked'));
						clickOn.click();
						var topButtons = element.all(by.id('topButtonDiv'));
						expect(topButtons.isDisplayed()).toBeTruthy();
					});*/
			it(
					'Should display remove button on top once select all checkboxes',
					function() {
						var Topcheckbox = element(by.model('allChecked'));
						Topcheckbox.click();

					});
			it(
					'should display links for view/edit buttons only when mouse hovered on default profile',
					function() {
						var profileRows = element.all(by.tagName('tr'));
						profileRows.first().then(
								function(row) {
									row.click();
									var counter = 0;
									var list = element(by.css('.rowhover'))
											.all(by.tagName('a'));

								/*	expect(list == [ 'MAKE DEFAULT', 'EDIT',
											'VIEW', 'REMOVE' ]);*/
									expect(list.count()).toEqual(4);
								});

					});

			
			it(
					'should display breadcrumb when user navigates to provider dashboard (#/providers/111)',
					function() {
						element(by.id('viewStorageLoc')).click();

						expect(
								element(by.className('modal-dialog'))
										.isDisplayed()).toBeTruthy();
					});
			
			
			
		});