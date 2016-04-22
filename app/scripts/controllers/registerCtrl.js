'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
        .controller('registerCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
