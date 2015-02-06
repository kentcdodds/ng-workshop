(function() {
  'use strict';
  var app = angular.module('app', [
    'firebase', 'luegg.directives',
    'formly', 'formlyBootstrap',
    'ui.router'
  ], function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('feedback', {
      url: '/',
      templateUrl: 'FeedbackCtrl.html',
      controller: 'FeedbackCtrl',
      controllerAs: 'vm'
    });

    $stateProvider.state('chat', {
      url: '/chat',
      templateUrl: 'ChatCtrl.html',
      controller: 'ChatCtrl',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  });

  app.constant('Firebase', Firebase);
  app.value('user', {});
})();
