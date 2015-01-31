(function() {
  'use strict';

  angular.module('app').factory('Feedback', Feedback);

  function Feedback($log, FirebaseUtil) {
    var feedback = FirebaseUtil.getFirebaseRef('feedback');

    return {
      sendFeedback: sendFeedback
    };

    function sendFeedback(workshop) {
      $log.info('Sending workshop to firebase ', workshop);
      feedback.push(workshop);
    }
  }
})();
