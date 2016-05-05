'use strict';

angular.module('introMeApp')
    .controller('educationCtrl', function ($scope) {
        $scope.hideShow=true;
    $scope.editShow=false;
        $scope.myname="Athar";
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.personInfo={company: "TCS" ,contactNo: "9876543210", email: "abcdEF@gmail.com", fName: "Mohammad",homeTown:"Hazaribagh",lName:"Hussain",location:"India"};

$scope.showEdit=function()
    {
         $scope.hideShow=false;
         $scope.editShow=true;
    };
    
    $scope.hideEdit=function()
    {
        $scope.editShow=!$scope.editShow;
        $scope.hideShow=!$scope.hideShow;
        // timer = $timeout(function(){
        //     $scope.hideShow=!$scope.hideShow;
     //    }, 250);

    };

     
     
    });
