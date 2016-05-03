'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
    .controller('hobbiesCtrl', function ($scope) {
        $scope.hobbies = [];
        $scope.addHobby = function (index) {
            console.log("button clicked");
            console.log("edit indexxx")
            console.log(index)
            if ($scope.newHobby != null && $scope.newDesc != null) {
                var temp = {};
                temp['name'] = $scope.newHobby;
                temp['desc'] = $scope.newDesc;
                $scope.hobbies.push(temp);
                $scope.newHobby = null;
                $scope.newDesc = null;
            }
            else {
                alert("Fill the form");
            }

        };

        $scope.removeHobby = function (index) {
            $scope.hobbies.splice(index, 1)
        };

        $scope.editHobby = function ($scope, index) {

        };

    });
