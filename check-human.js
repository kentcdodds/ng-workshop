(function() {
  'use strict';

  angular.module('app').directive('checkHuman', checkHuman);

  function checkHuman() {
    return {
      restrict: 'E',
      template: [
        '<div class="check-human form-group">',
          '<label for="checkHumanAnswer">Are You Human? What is {{vm.rand1}} plus {{vm.rand2}}?</label>',
          '<input ng-model="vm.answer" ng-change="vm.check(vm.answer)" type="text" class="form-control" id="checkHumanAnswer"/>',
        '</div>'
      ].join(' '),
      scope: {
        valid: '=isHuman'
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: function checkHumanCtrl() {
        var vm = this;

        // variable assignment
        vm.valid = false;
        vm.rand1 = Math.floor(Math.random() * 5) + 1;
        vm.rand2 = Math.floor(Math.random() * 5) + 1;
        var correct = vm.rand1 + vm.rand2;

        // function assignment
        vm.check = check;

        // function declaration
        function check() {
          vm.valid = parseInt(vm.answer, 10) === correct;
        }
      }
    };
  }
})();
