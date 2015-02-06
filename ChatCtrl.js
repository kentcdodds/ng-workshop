(function() {
  'use strict';

  angular.module('app').controller('ChatCtrl', ChatCtrl);

  function ChatCtrl(FirebaseUtil, $firebase, user) {
    var vm = this;

    // variable assignment
    var chatRef = FirebaseUtil.getFirebaseRef('chat');
    var messageSync = $firebase(chatRef);
    vm.messages = messageSync.$asArray();
    vm.user = user;

    // function assignment
    vm.addMessage = addMessage;

    //function declaration
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
