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
                 url: 'http://localhost:8000/getHobby',
                 headers: {
                   'Content-Type': 'application/JSON'
                 }
                }
            $http(req).then(function mySucces(response) {
               
                $scope.hobbies = response.data;
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
            }
            else {
                alert("Fill the form");
            }


            

            /*var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
              $scope.nodejsVal = xhttp.responseText;
            }
            else{
                alert("Not working")
            }
          };
          xhttp.open("GET", "http://localhost:8000/getHobby", true);
          xhttp.send();*/
         };

        $scope.removeHobby = function (index) {
            $scope.hobbies.splice(index, 1)
        };

        $scope.editHobby = function (index) {
            if (index != null) {
                $scope.pos = index;
                $scope.newHobby = $scope.hobbies[$scope.pos]['name'];
                $scope.newDesc = $scope.hobbies[$scope.pos]['desc'];
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
