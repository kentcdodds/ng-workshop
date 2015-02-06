angular.module('app').filter('awesomeReplace', function awesomeReplaceFilter() {
  return function awesomeReplace(array, prop, propVal) {
    if (!angular.isArray(array)) {
      return array;
    }

    angular.forEach(array, function(item) {
      item[prop] = propVal;
    });

    return array;
  };
});
