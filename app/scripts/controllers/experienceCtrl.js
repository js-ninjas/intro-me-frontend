'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
  .controller('experienceCtrl', function ($scope) {
     $scope.hideShow=true;
    $scope.editShow=false;
       
     $scope.personInfo={company: "TCS" ,contactNo: "9876543210", email: "abcdEF@gmail.com", fName: "Mohammad",homeTown:"Hazaribagh",lName:"Hussain",location:"India",mDate:"May/2001",iDate:"May/2003",gDate:"July/2007",pDate:"August/2009"};

   
  });
