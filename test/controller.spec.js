describe('Controller', function() {
  
  var $controller, $scope, DataService;
  
  beforeEach(function () {
    module('myApp');
 
    inject(function (_$controller_, $rootScope, _DataService_) {
      $controller = _$controller_;
      $scope = $rootScope.$new();
      DataService = _DataService_;
    });
 });

  describe('Fullname', function() {
    it('get full name', function() {
      var DataServiceMock = {
        getData: function() {
          return Promise.resolve({name: "Thilanka Kaushalya"});
        }
      }

      var controller = $controller('myCtrl', {$scope : $scope, DataService : DataServiceMock});
      expect(controller.fullname).to.equal("Thilanka Kaushalya");
    });
  });

});
