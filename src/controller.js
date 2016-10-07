angular.module('myApp').controller('myCtrl', function(dataService) {
  var vm = this;

  vm.fullname = "Thilanka";

  fetchData();

  function fetchData() {
    dataService.getData().then(function(data) {
      console.log(data.name);
    });
  }
});
