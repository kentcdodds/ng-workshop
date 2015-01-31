(function() {
  'use strict';

  angular.module('app').controller('FeedbackCtrl', FeedbackCtrl);

  function FeedbackCtrl() {
    var vm = this;

    // variable assignment
    vm.workshop = {score: 10};

    // function assignment
    vm.sendFeedback = sendFeedback;

    //function declaration
    function sendFeedback(workshop) {
      alert(JSON.stringify(workshop, null, 2));
    }
  }
})();
