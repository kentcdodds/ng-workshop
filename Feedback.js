(function() {
  'use strict';

  angular.module('app').factory('Feedback', Feedback);

  function Feedback($log, $http, API_URL) {
    var url = API_URL + 'feedback/';
    return {
      sendFeedback: sendFeedback,
      remove: remove
    };

    function sendFeedback(workshop) {
      $log.info('Sending workshop to firebase ', workshop);
      return $http.post(url, workshop);
    }

    function remove(workshop, index) {
      return $http.delete(url + index);
    }
  }
})();
