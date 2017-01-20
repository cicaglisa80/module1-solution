(function () {
  'use strict';

  angular.module('LunchApp', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.customStyle = {};
    $scope.outputMessage = '';

    $scope.checkAmountOfFood = function () {

      if (!$scope.food) {
        $scope.customStyle.colorClass = "red";
        $scope.outputMessage = 'Please enter data first';
        return;
      }

      var result = $scope.food.split(',');

      $scope.customStyle.colorClass = "green";
      if (result.length <= 3) {
        $scope.outputMessage = 'Enjoy!';
      } else {
        $scope.outputMessage = 'Too much!';
      }
    }
  }

})();
