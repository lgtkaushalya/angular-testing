angular.module('myApp').controller('myCtrl', function($scope, DataService, $q) {
  var vm = this;
  var deferredLoaded = $q.defer();
  vm.loaded = deferredLoaded.promise;

  vm.fullname = "";

  fetchData();

  function fetchData() {
    DataService.getData().then(function(data) {
      vm.fullname = data.name;
      $scope.$apply();
      deferredLoaded.resolve();
    });
  }
});
