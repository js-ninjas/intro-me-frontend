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

        $scope.achievements = [
            {
                "year": 2016,
                "achievementsDesc": [
                    {
                        "achievementName": "asd",
                        "description": "asd",
                        "$$hashKey": "object:69"
                    },
                    {
                        "achievementName": "asd",
                        "description": "asd",
                        "$$hashKey": "object:74"
                    }
                ]
            },
            {
                "year": 2017,
                "achievementsDesc": [
                    {
                        "achievementName": "asd",
                        "description": "asd",
                        "$$hashKey": "object:69"
                    },
                    {
                        "achievementName": "asd",
                        "description": "asd",
                        "$$hashKey": "object:74"
                    }
                ]
            }
        ];

        // use slice() to copy the array and not just make a reference
        /*       $scope.achievements = $scope.achievements.slice(0);
         $scope.achievements.sort(function (a, b) {
         return a.year - b.year;
         });
         */

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
                /*   temp['achievementName'] = $scope.achievementName;
                 temp['description'] = $scope.achievementDesc;*/
                var pos = -1;
                console.log("ARRY LENGTH " + $scope.achievements.length)
                if ($scope.achievements.length != 0) {
                    /* $scope.achievements.forEach(function (achievement, i) {
                     console.log("ITERATION VALUE " + i);
                     console.log("ITERATION VALUE " + i);

                     /!*            if (achievement.year == year) {
                     console.log("FOUND YEAR " + year)
                     console.log("achievement BEFORE" + JSON.stringify($scope.achievements))
                     console.log("a$scope.achievements['year'] " + JSON.stringify($scope.achievements[i]['achievementsDesc']))
                     $scope.achievements[i]['achievementsDesc'].push(temp);
                     console.log("FINAL OBJ " + JSON.stringify($scope.achievements))

                     }
                     else {
                     console.log(" YEAR NOT FOUND " + year)
                     var newObj = {};
                     newObj['year'] = year;
                     newObj['achievementsDesc'] = [temp];
                     $scope.achievements.push(newObj);
                     }*!/
                     })*/
                    for (var i = 0; i < $scope.achievements.length; i++) {
                        if ($scope.achievements[i].year == year) {
                            pos = i;
                        }
                    }

                    if (pos == -1) {
                        console.log("YEAR DOES NOT EXISTS");
                        var newObj = {};
                        var achievementsDesc = []
                        //newObj['year'] = (year);
                        newObj['achievementName'] = $scope.achievementName;
                        newObj['description'] = $scope.achievementDesc;
                        achievementsDesc.push(newObj);
                        var tempObj = {};
                        tempObj['year'] = year;
                        tempObj['achievementsDesc'] = achievementsDesc;
                        $scope.achievements.push(tempObj);
                    }
                    else {
                        temp["achievementName"] = $scope.achievementName;
                        temp["description"] = $scope.achievementDesc;
                        //console.log("TEMP OBJ   " + JSON.stringify(temp))
                        $scope.achievements[pos]['achievementsDesc'].push(temp);
                    }
                }
                else {
                    console.log(" FIRST RECORD " + year)
                    var newObj = {};
                    var achievementsDesc = []
                    //newObj['year'] = (year);
                    newObj['achievementName'] = $scope.achievementName;
                    newObj['description'] = $scope.achievementDesc;
                    achievementsDesc.push(newObj);
                    var tempObj = {};
                    tempObj['year'] = year;
                    tempObj['achievementsDesc'] = achievementsDesc;
                    $scope.achievements.push(tempObj);
                    console.log("NEW OBJ    " + JSON.stringify($scope.achievements))

                }

            }
            else {
                alert("All fields are mandatory");
            }
        };


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
