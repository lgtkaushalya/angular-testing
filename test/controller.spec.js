describe('Controller', function() {
  
  var $controller;
  
  beforeEach(function () {
    module('myApp');
 
    inject(function (_$controller_) {
      $controller = _$controller_;
    });
 });

  describe('Fullname', function() {
    it('get full name', function() {
      var controller = $controller('myCtrl', {});
      expect(controller.fullname).to.equal("Thilanka");
    });
  });

});
