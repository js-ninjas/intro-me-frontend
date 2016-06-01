'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
    .controller('hobbiesCtrl', function ($scope, $http) {
        $scope.hobbies =null;
        $scope.pos = null;
        $scope.nodejsVal=null;

        var req = {
                 method: 'GET',
                 url: 'http://localhost:8000/hobbies',
                 headers: {
                   'Content-Type': 'application/JSON'
                 }
                }
            $http(req).then(function mySucces(response) {
               
                $scope.hobbies = response.data;
                console.log(response.data);
            },function myError(response) {
                //alert("myError");
               
                console.log(response);
                    $scope.nodejsVal = response.statusText;
                    alert("myError  "+$scope.nodejsVal);
            });
            
        
        $scope.addHobby = function () {
            if ($scope.newHobby != null && $scope.newDesc != null) {
                var temp = {};
                temp['name'] = $scope.newHobby;
                temp['desc'] = $scope.newDesc;
                $scope.hobbies.push(temp);
                $scope.newHobby = null;
                $scope.newDesc = null;
                temp=angular.toJson(temp);
               var req = {
                 method: 'POST',
                 url: 'http://localhost:8000/hobbies',
                 headers: {
                   'Content-Type': 'application/JSON'
                 },
                 data:temp
                }
                $http(req).then(function mySucces(response) {
                   
                    //$scope.experiences = response.data;
                    console.log("SUCCESS DATA");
                    console.log(response.data);
                },function myError(response) {
                    console.log(response);
                    $scope.nodejsVal = response.statusText;
                     alert("myError  "+$scope.nodejsVal);
                });
            }
            else {
                alert("Fill the form");
            }
         };


        $scope.removeHobby = function (index) {

            var abc='?name='+$scope.hobbies[index].name;
             $scope.hobbies.splice(index, 1)

            var req = {
             method: 'DELETE',
             url: 'http://localhost:8000/hobbies'+abc,
             headers: {
               'Content-Type': 'application/JSON'
             }/*,
             data:jsonData*/
            }
            $http(req).then(function mySucces(response) {
               
                //$scope.experiences = response.data;
                console.log("SUCCESS DATA");
                console.log(response.data);
            },function myError(response) {
                console.log(response);
                $scope.nodejsVal = response.statusText;
                 alert("myError  "+$scope.nodejsVal);
            });
        };

        $scope.editHobby = function (index) {
            if (index != null) {
                $scope.pos = index;
                $scope.newHobby = $scope.hobbies[$scope.pos]['name'];
                $scope.newDesc = $scope.hobbies[$scope.pos]['desc'];
            }

            if (index == null && $scope.newHobby != null && $scope.newDesc != null) {
                var abc="?name="+$scope.hobbies[$scope.pos]['name'];
                $scope.hobbies[$scope.pos]['name'] = $scope.newHobby;
                $scope.hobbies[$scope.pos]['desc'] = $scope.newDesc;
                $scope.newHobby = null;
                $scope.newDesc = null;
                var data=$scope.hobbies[$scope.pos];

                delete data['_id'];
                data=angular.toJson(data);
                 var jsonData =JSON.stringify(data);
                    var req = {
                     method: 'PUT',
                     url: 'http://localhost:8000/hobbies'+abc,
                     headers: {
                       'Content-Type': 'application/JSON'
                     },
                     data:jsonData
                    }
                    $http(req).then(function mySucces(response) {
                       
                        //$scope.experiences = response.data;
                        console.log("SUCCESS DATA");
                        console.log(response.data);
                    },function myError(response) {
                        console.log(response);
                        $scope.nodejsVal = response.statusText;
                         alert("myError  "+$scope.nodejsVal);
                    });
            }
            else if (index >= 0) {
                console.log("Do nothing");
            }
            else {
                alert("Both name and description is mandatory");
            }
        };

    });
