var stub = sinon.stub();
describe('Controller', function() {
  
  var $controller, $scope, $q;
  
  beforeEach(function () {
    module('myApp');
 
    inject(function (_$controller_, $rootScope, _$q_) {
      $controller = _$controller_;
      $scope = $rootScope.$new();
      $q = _$q_;
    });
 });

  describe('Fullname', function() {
    it('get full name', function() {

      var DataServiceMock = { getData: sinon.stub() };
      DataServiceMock.getData.returns($q.resolve({name: "Thilanka Kaushalya"}));

      var controller = $controller('myCtrl', {$scope : $scope, DataService : DataServiceMock, $q : $q});
      controller.loaded.then(function() {
        expect(controller.fullname).to.equal('Thilanka Kaushalya');
      });
    });
  });

});
