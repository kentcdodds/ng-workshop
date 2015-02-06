(function() {
  'use strict';

  angular.module('app').controller('FeedbackCtrl', FeedbackCtrl);

  function FeedbackCtrl(Feedback, FirebaseUtil, $firebase) {
    var vm = this;

    // variable assignment
    var chatRef = FirebaseUtil.getFirebaseRef('chat');
    var messageSync = $firebase(chatRef);
    vm.messages = messageSync.$asArray();
    vm.workshop = {
      attendee: 'Kent C. Dodds',
      score: 10
    };
    vm.message = 'Default message';

    // function assignment
    vm.sendFeedback = sendFeedback;
    vm.addMessage = addMessage;

    //function declaration
    function sendFeedback(workshop) {
      Feedback.sendFeedback(workshop);
      alert('Thanks for the ' + workshop.score + '!');
    }

    function addMessage(event) {
      if (event.keyCode !== 13) {
        return;
      }
      vm.messages.$add({
        from: vm.workshop.attendee,
        body: vm.message
      });
      vm.message = '';
    }
  }
})();
