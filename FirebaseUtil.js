(function() {
  'use strict';

  angular.module('app').factory('FirebaseUtil', FirebaseUtil);

  function FirebaseUtil(Firebase) {
    var formattedDate = generateFormattedDate();
    return {
      getFirebaseRef: getFirebaseRef
    };

    function getFirebaseRef(child) {
      var url = 'https://ng-workshop.firebaseio.com/' + child + '/' + formattedDate;
      return new Firebase(url);
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
