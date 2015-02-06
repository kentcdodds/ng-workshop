describe('check-human', function() {
  beforeEach(module('app'));

  var $compile, scope;
  var template = '<check-human is-valid="vm.valid"></check-human>';

  beforeEach(inject(function(_$compile_, $rootScope) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    scope.vm = {
      valid: true
    };
  }));

  it('should set isValid to false when the answer is not valid', function() {
    var el = $compile(template)(scope);
    scope.$digest();
    var isolateScope = el.isolateScope();
    var rand1 = isolateScope.vm.rand1;
    var rand2 = isolateScope.vm.rand2;
    var answer = rand1 + rand2;

  });

  it('should set isValid to true when the answer is valid', function() {

  });

});
