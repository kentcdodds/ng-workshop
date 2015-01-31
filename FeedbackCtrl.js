(function() {
  'use strict';

  angular.module('app').controller('FeedbackCtrl', FeedbackCtrl);

  function FeedbackCtrl(Feedback) {
    var vm = this;

    // variable assignment
    vm.workshop = {score: 10};

    // function assignment
    vm.sendFeedback = sendFeedback;

    //function declaration
    function sendFeedback(workshop) {
      Feedback.sendFeedback(workshop);
      alert('Thanks for the ' + workshop.score + '!');
    }
  }
})();
