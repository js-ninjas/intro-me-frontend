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
        $scope.hobbies = [
            {
                name: 'driving',
                desc: "good hobby"
            },
            {
                name: 'driving',
                desc: "good hobby"
            }

        ];
        $scope.addHobby = function () {
            console.log("button clicked");
            if ($scope.newHobby != null && $scope.newDesc != null) {
                var temp = {};
                temp['name'] = $scope.newHobby;
                temp['desc'] = $scope.newDesc;
                console.log("TEMP VAL");
                console.log(temp);
                $scope.hobbies.push(temp);
                $scope.newHobby = null;
                $scope.newDesc = null;
            }
            else {
                alert("Fill the form");
            }

        }

    });
