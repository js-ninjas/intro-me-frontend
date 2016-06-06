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
        $scope.editIndex = null;
        $scope.editYearIndex = null;
        $scope.btnName = 'Add';

        $scope.achievements = [/*{
         year: 2012,
         date:
         achievementsDesc: [{
         'achieveId': 1,
         'achievementName': "achievementName",
         'description': 'description'
         }]
         }*/];

        // My variables
        $scope.addEdit = "Add";
        $scope.addEditview = true;
        $scope.addachiv = function () {
            $scope.addEdit = "Add";
            $scope.addEditview = true;
        };

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

        function buildRawDate(date) {
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var tempDate = new Date(date);
            var month = tempDate.getMonth();
            var year = tempDate.getFullYear();
            return monthNames[month] + "/" + year;
        }

        $scope.addAchievement = function () {
            var year = new Date($scope.year).getFullYear();
            var rawDate = buildRawDate($scope.year);
            if ($scope.achievementName != null && $scope.achievementDesc != null) {
                var temp = {};
                var pos = -1;
                if ($scope.achievements.length != 0) {
                    for (var i = 0; i < $scope.achievements.length; i++) {
                        if ($scope.achievements[i].year == year) {
                            pos = i;
                        }
                    }

                    if (pos == -1) { // save new acheviement for the year
                        var newObj = {};
                        var achievementsDesc = [];
                        newObj['achievementName'] = $scope.achievementName;
                        newObj['description'] = $scope.achievementDesc;
                        newObj['rawDate'] = rawDate;
                        achievementsDesc.push(newObj);
                        var tempObj = {};
                        tempObj['year'] = year;
                        // tempObj['rawDate'] = rawDate;
                        tempObj['achievementsDesc'] = achievementsDesc;
                        $scope.achievements.push(tempObj);
                        //sortYearOfAchievement();
                        resetNgModal();
                    }
                    else {   // update(push) acheviement for given year
                        temp["achievementName"] = $scope.achievementName;
                        temp["description"] = $scope.achievementDesc;
                        temp["rawDate"] = rawDate;
                        $scope.achievements[pos]['achievementsDesc'].push(temp);
                        //sortYearOfAchievement();
                        resetNgModal();
                    }
                }
                else { // save new acheviement
                    var newObj = {};
                    var achievementsDesc = [];
                    newObj['achievementName'] = $scope.achievementName;
                    newObj['description'] = $scope.achievementDesc;
                    newObj['rawDate'] = rawDate;
                    achievementsDesc.push(newObj);
                    var tempObj = {};
                    tempObj['year'] = year;
                    tempObj['achievementsDesc'] = achievementsDesc;
                    $scope.achievements.push(tempObj);
                    //sortYearOfAchievement();
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

            $scope.editIndex = null;
            $scope.editYearIndex = null;
            $scope.achievementName = null;
            $scope.achievementDesc = null;
        };


        $scope.setEditValues = function (index, yearIndex) {
            console.log($scope.achievements);
            $scope.addEdit = "Edit";
            $scope.editIndex = index;
            $scope.editYearIndex = yearIndex;
            $scope.achievementName = $scope.achievements[yearIndex].achievementsDesc[index].achievementName;
            $scope.achievementDesc = $scope.achievements[yearIndex].achievementsDesc[index].description;
            console.log("YEAR ISSYE INDEX " + yearIndex)
            console.log($scope.achievements[yearIndex])
            $scope.year = $scope.achievements[yearIndex]['achievementsDesc'][index]['rawDate'];//$scope.achievements[yearIndex]['rawDate'];
            $scope.addEditview = false;
        };

        $scope.editAchievement = function () {
            $scope.achievements[$scope.editYearIndex]['achievementsDesc'][$scope.editIndex]['achievementName'] = $scope.achievementName;
            $scope.achievements[$scope.editYearIndex]['achievementsDesc'][$scope.editIndex]['description'] = $scope.achievementDesc;
            $scope.achievements[$scope.editYearIndex]['achievementsDesc'][$scope.editIndex]['rawDate'] = buildRawDate($scope.year);
            $scope.achievements[$scope.editYearIndex]['year'] = new Date($scope.year).getFullYear();
            resetNgModal();
        };

        $scope.removeAchievement = function (index, achieveYear) {
            console.log("YEAR achieveYear INDEX " + achieveYear)
            console.log("YEAR achieveYear INDEX " + index)
            $scope.achievements[achieveYear]['achievementsDesc'].splice(index, 1);
            if ($scope.achievements[achieveYear]['achievementsDesc'].length == 0) {
                $scope.achievements.splice(0, 1)
            }
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
