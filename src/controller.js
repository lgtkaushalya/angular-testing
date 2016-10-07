angular.module('myApp').controller('myCtrl', function($scope, DataService) {
  var vm = this;

  vm.fullname = "";

  fetchData();

  function fetchData() {
    DataService.getData().then(function(data) {
      vm.fullname = data.name;
      $scope.$apply();
    });
  }
});
