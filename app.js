(function() {
  'use strict';
  var app = angular.module('app', [
    'firebase', 'luegg.directives',
    'formly', 'formlyBootstrap',
    'ui.router'
  ], function config($stateProvider, $urlRouterProvider, API_URL) {
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

    $stateProvider.state('admin', {
      url: '/admin',
      templateUrl: 'AdminCtrl.html',
      controller: 'AdminCtrl',
      controllerAs: 'vm',
      resolve: {
        feedback: function($http) {
          return $http.get(API_URL + 'feedback').then(function(response) {
            return response.data;
          });
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });

  app.constant('Firebase', Firebase);
  app.constant('API_URL', 'http://localhost:3000/');
  app.value('user', {});
})();
