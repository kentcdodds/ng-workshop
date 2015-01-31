(function() {
  'use strict';
  var app = angular.module('app', ['firebase', 'luegg.directives']);

  app.constant('Firebase', Firebase);
})();
