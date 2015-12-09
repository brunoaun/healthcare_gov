'use strict';

describe('Controller: GlossaryCtrl', function () {

  // load the controller's module
  beforeEach(module('healthcareGovApp'));

  var GlossaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlossaryCtrl = $controller('GlossaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlossaryCtrl.awesomeThings.length).toBe(3);
  });
});
