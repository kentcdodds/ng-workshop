angular.module('app').filter('amazing', function amazingFilterDefinition() {
  return function amazingFilter(input) {
    return (input || '').replace(
      /lame|boring|dull|pointless|slow/ig, 'AMAZING'
    );
  };
});
