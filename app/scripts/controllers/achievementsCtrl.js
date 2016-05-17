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
        $scope.achieveId = 0;
        $scope.achievements = [/*{
         year: 2012,
         achievementsDesc: [{
         'achieveId': 1,
         'achievementName': "achievementName",
         'description': 'description'
         }]
         }*/];

        // use slice() to copy the array and not just make a reference
        function sortYearOfAchievement() {
            $scope.achievements = $scope.achievements.slice(0);
            $scope.achievements.sort(function (a, b) {
                return a.year - b.year;
            });

        }

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
            var year = new Date($scope.year).getFullYear();

            if ($scope.achievementName != null && $scope.achievementDesc != null) {
                var temp = {};
                var pos = -1;
                if ($scope.achievements.length != 0) {
                    for (var i = 0; i < $scope.achievements.length; i++) {
                        if ($scope.achievements[i].year == year) {
                            pos = i;
                        }
                    }

                    if (pos == -1) {
                        var newObj = {};
                        var achievementsDesc = [];
                        newObj['achievementName'] = $scope.achievementName;
                        newObj['description'] = $scope.achievementDesc;
                        newObj['achieveId'] = ++$scope.achieveId;
                        achievementsDesc.push(newObj);
                        var tempObj = {};
                        tempObj['year'] = year;
                        tempObj['achievementsDesc'] = achievementsDesc;
                        resetNgModal();
                        $scope.achievements.push(tempObj);
                        sortYearOfAchievement();
                    }
                    else {
                        temp["achievementName"] = $scope.achievementName;
                        temp["description"] = $scope.achievementDesc;
                        temp["achieveId"] = ++$scope.achieveId;
                        $scope.achievements[pos]['achievementsDesc'].push(temp);
                        sortYearOfAchievement();
                        resetNgModal();
                    }
                }
                else {
                    var newObj = {};
                    var achievementsDesc = [];
                    newObj['achievementName'] = $scope.achievementName;
                    newObj['description'] = $scope.achievementDesc;
                    newObj['achieveId'] = ++$scope.achieveId;
                    achievementsDesc.push(newObj);
                    var tempObj = {};
                    tempObj['year'] = year;
                    tempObj['achievementsDesc'] = achievementsDesc;
                    $scope.achievements.push(tempObj);
                    sortYearOfAchievement();
                    resetNgModal();
                }
            }
            else {
                alert("All fields are mandatory");
            }
        };

        function resetNgModal() {
            $scope.achievementName = null;
            $scope.achievementDesc = null;
            $scope.year = null;
        };

        $scope.editAchievement = function (index, achieveId, achieveYear) {
console.log("here in edit")
        };

        $scope.removeAchievement = function (index, achieveYear) {
            $scope.achievements.forEach(function (achievement) {
                if (achievement.year == achieveYear) {
                    achievement.achievementsDesc.splice(index, 1);
                    if (achievement.achievementsDesc.length == 0) {
                        $scope.achievements.splice(0, 1)
                    }
                }
            });

        };

        /*date picker plugin controllers*/
        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.minDate = $scope.minDate ? null : new Date("01/01/1950");
        var d = new Date();
        var n = d.getFullYear();
        n = n + 1;
        var m = "31/December/" + n;
        $scope.maxDate = new Date(m);

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            minMode: 'month'
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

    });
