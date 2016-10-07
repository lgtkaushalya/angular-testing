angular.module('myApp').service('DataService', function() {
  return {
    getData: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve({name: "Thilanka Kaushalya Lanka Geeganage"});
        }, 2000);
      });
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
