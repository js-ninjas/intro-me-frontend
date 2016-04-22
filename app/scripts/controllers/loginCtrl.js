'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
  .controller('loginCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.validateUser = function () {

      if ($scope.username === 'k@k.com' && $scope.password === 'kiran') {
        $location.path('/profile');
      }
      else {
          console.log("login")
          console.log($scope.awesomeThings)
        alert('Login incorrect');
      }
    };

  });
