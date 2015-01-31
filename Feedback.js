(function() {
  'use strict';

  angular.module('app').factory('Feedback', Feedback);

  function Feedback($log, Firebase) {
    var formattedDate = generateFormattedDate();
    var url = 'https://ng-workshop.firebaseio.com/feedback/' + formattedDate;
    var feedback = new Firebase(url);
    return {
      sendFeedback: sendFeedback
    };

    function sendFeedback(workshop) {
      $log.info('Sending workshop to firebase ', workshop);
      feedback.push(workshop);
    }

    function generateFormattedDate() {
      var d = new Date();
      return d.getFullYear() + '-' + addZero(d.getMonth() + 1) + '-' + addZero(d.getDate());
    }

    function addZero(num) {
      return (num < 10 ? '0' : '') + num;
    }
  }
})();
