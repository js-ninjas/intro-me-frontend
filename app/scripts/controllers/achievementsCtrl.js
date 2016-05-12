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
        $scope.achievements = [
            {
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
            },
            {
                year: 2011,
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
            },
            {
                year: 2013,
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
            },
            {
                year: 2010,
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
            }
        ];

        // use slice() to copy the array and not just make a reference
        $scope.achievements = $scope.achievements.slice(0);
        $scope.achievements.sort(function (a, b) {
            return a.year - b.year;
        });
    });
