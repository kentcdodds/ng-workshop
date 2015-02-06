(function() {
  'use strict';

  angular.module('app').controller('FeedbackCtrl', FeedbackCtrl);

  function FeedbackCtrl(Feedback, $state, user) {
    var vm = this;

    // variable assignment
    vm.workshop = {
      attendee: 'Kent C. Dodds',
      score: 10,
      feedback: 'This is a test!'
    };
    vm.workshopFields = [
      {
        type: 'input',
        key: 'attendee',
        templateOptions: {
          label: 'Name',
          placeholder: 'Hello world!',
          required: true
        }
      },
      {
        type: 'number',
        key: 'score',
        templateOptions: {
          label: 'Score',
          required: true
        }
      },
      {
        type: 'textarea',
        key: 'feedback',
        expressionProperties: {
          'templateOptions.placeholder': "model.score ? 'Why the ' + model.score + '?' : ''"
        },
        templateOptions: {
          required: true,
          label: 'Feedback'
        }
      }
    ];

    // function assignment
    vm.sendFeedback = sendFeedback;

    //function declaration
    function sendFeedback(workshop) {
      Feedback.sendFeedback(workshop);
      user.name = workshop.attendee;
      $state.go('chat');
    }
  }
})();
