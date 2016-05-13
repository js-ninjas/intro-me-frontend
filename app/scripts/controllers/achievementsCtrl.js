'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
    .controller('achievementsCtrl', function ($scope) {
        $scope.headingBgColors = ['#F8DDA1', '#B9A593'];
        $scope.contentBgColors = ['#81C6DD'];

        $scope.achievements = [{
            year: 2012,
            achievementsDesc: [
                {
                    achievementName: "Race",
                    description: "hi hello"
                },
                {
                    achievementName: "Race",
                    description: "hi hello"
                },
                {
                    achievementName: "Race",
                    description: "hi hello"
                }
            ]
        }];

        // use slice() to copy the array and not just make a reference
        $scope.achievements = $scope.achievements.slice(0);
        $scope.achievements.sort(function (a, b) {
            return a.year - b.year;
        });


        $scope.colorPicker = function (index, isHeading) {
//if odd pos return 0
//if even pos return 1
            if (index % 2 == 0) {
                return isHeading ? {"background-color": $scope.headingBgColors[0]} : {"background-color": $scope.contentBgColors[0]}
            }
            else {
                return isHeading ? {"background-color": $scope.headingBgColors[1]} : {"background-color": $scope.contentBgColors[1]}
            }
        };


        $scope.addAchievement = function () {
            console.log("achievementName :" + $scope.achievementName)
            console.log("achievementDesc :" + $scope.achievementDesc)
            if ($scope.achievementName != null && $scope.achievementDesc != null) {
                var temp = {};
                temp['achievementName'] = $scope.achievementName;
                temp['description'] = $scope.achievementDesc;
                $scope.hobbies.push(temp);
                $scope.newHobby = null;
                $scope.newDesc = null;
            }
            else {
                alert("Fill the form");
            }
        }
    });
