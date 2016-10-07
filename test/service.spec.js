describe('Person', function() {
  var Person, visitor, $httpBackend;

  beforeEach(module('myApp'));
  beforeEach(module(function($provide){
    visitor = {country: 'UK'};
    $provide.value('visitor', visitor);
  }));

  beforeEach(inject(function(_Person_, _$httpBackend_) {
    Person = _Person_;
    $httpBackend = _$httpBackend_;
  }));

  describe('Constructor', function() {
    it('Assign a name', function() {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });
  });

  describe('Greating', function() {
    it('UK visitor', function() {
      expect(new Person('Nigel').greet()).to.equal('Good day to you, Nigel.');
    });
  });

  describe('Create', function() {
    it('Creates the person in the server', function() {
      $httpBackend.expectPOST('/people', {
        name : 'Ben'
      })
      .respond({name: 'Saved Ben'});
      
      var savedData = new Person('Ben');
      savedData.create();
      $httpBackend.flush();
      expect(savedData.name).to.equal('Saved Ben');
    });
  });
});

describe('DataService', function() {
  var DataService;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_DataService_){
    DataService = _DataService_;
  }));

  describe('getData', function() {

    it('get name', function(done) {
      this.timeout(5000);
      DataService.getData().then(function(data) {
        expect(data.name).to.equal('Thilanka Kaushalya Lanka Geeganage');
        done();
      });
    });
  });
});
