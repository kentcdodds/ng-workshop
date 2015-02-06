angular.module('app').filter('highlightSearch', function highlightSearchFilterDefinition($sce) {
  return function highlightSearchFilter(input, highlight) {
    var regex = new RegExp('(' + highlight + ')', 'gi');
    var highlightChars = (input || '').replace(regex, '<span class="highlight">$1</span>');
    return $sce.trustAsHtml('<span>' + highlightChars + '</span>');
  };
});
