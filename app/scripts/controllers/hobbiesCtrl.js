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
        $scope.pos = null;
        $scope.addHobby = function () {
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

        $scope.editHobby = function (index) {
            if (index != null) {
                $scope.pos = index;
            }

            if (index == null && $scope.newHobby != null && $scope.newDesc != null) {
                $scope.hobbies[$scope.pos]['name'] = $scope.newHobby;
                $scope.hobbies[$scope.pos]['desc'] = $scope.newDesc;
                $scope.newHobby = null;
                $scope.newDesc = null;
            }
            else if (index >= 0) {
                console.log("Do nothing");
            }
            else {
                alert("Both name and description is mandatory");
            }
        };

    });
