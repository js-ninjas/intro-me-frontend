'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
  .controller('profileCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = "athar Hussain";
    $scope.hideShow=true;
    $scope.editShow=false;
    $scope.personInfo=null;
    var timer;

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

    $scope.savePersonInfo=function(person) // person object with all person info.
    {
    	//console.log(person);
    	
    	$scope.personInfo=person;
    	
    	console.log($scope.personInfo);
    	
    	$scope.hideEdit();
    	
    };
  });
