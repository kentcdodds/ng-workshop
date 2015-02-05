(function() {
  'use strict';
  var app = angular.module('app', ['firebase', 'luegg.directives', 'formly', 'formlyBootstrap']);

  app.constant('Firebase', Firebase);
})();
