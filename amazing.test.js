describe('amazing', function() {
  beforeEach(module('app'));

  var amazing;

  beforeEach(inject(function($filter) {
    amazing = $filter('amazing');
  }));

  it('should change mean words to AMAZING', function() {
    expect(amazing('this was dull')).to.equal('this was AMAZING');
  });

  it('should handle multiples', function() {
    expect(amazing('boring and lame')).to.equal('AMAZING and AMAZING');
  });

  it('should handle any case', function() {
    expect(amazing('LaME')).to.equal('AMAZING');
  });
});
