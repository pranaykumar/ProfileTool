'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('#/index.html');

  it('should automatically redirect to /providers when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/providers");
  });


  describe('provider', function() {

    beforeEach(function() {
      browser.get('#/providers');
    });


    it('should render providers when user navigates to #/providers', function() {
      expect(element.all(by.css('[ng-controller] label')).first().getText()).
        toMatch('Search Provider');
    });

  });


//  describe('view2', function() {
//
//    beforeEach(function() {
//      browser.get('index.html#/view2');
//    });
//
//
//    it('should render view2 when user navigates to /view2', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
});
