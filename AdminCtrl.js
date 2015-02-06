(function() {
  'use strict';

  angular.module('app').controller('AdminCtrl', AdminCtrl);

  function AdminCtrl(feedback, Feedback) {
    var vm = this;

    vm.feedback = feedback;
    vm.removeFeedback = Feedback.remove;

  }
})();
