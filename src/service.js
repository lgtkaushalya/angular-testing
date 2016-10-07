angular.module('myApp').service('dataService', function() {
  return {
    getData: function() {
      return Promise.resolve({name: "Thilanka"});
    }
  };
});

angular.module('myApp').service('Person', function(visitor, $http) {
  return function Person(name) {
    this.name = name;
    var parent = this;
    this.greet = function() {
      if (visitor.country == 'UK') {
        return 'Good day to you, ' +this.name+'.';
      } else {
        return 'Hay'+ this.name + '!';
      }
    }
    this.create = function() {
      var data = $http.post('/people', this).then(function() {
        parent.name = "Saved Ben";
      });

    }
  }
});

angular.module('myApp').service('visitor', function() {
  this.country = 'US';
});
