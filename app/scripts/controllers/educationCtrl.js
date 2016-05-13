'use strict';

angular.module('introMeApp')
    .controller('educationCtrl', function ($scope) {
        $scope.hideShow=true;
    $scope.editShow=false;
       
     $scope.personInfo={company: "TCS" ,contactNo: "9876543210", email: "abcdEF@gmail.com", fName: "Mohammad",homeTown:"Hazaribagh",lName:"Hussain",location:"India",mDate:"May/2001",iDate:"May/2003",gDate:"July/2007",pDate:"August/2009"};

$scope.showEdit=function()
    {
         $scope.hideShow=false;
         $scope.editShow=true;
    };
    
    $scope.hideEdit=function()
    {

        $scope.editShow=!$scope.editShow;
        $scope.hideShow=!$scope.hideShow;
        $route.reload();
        // timer = $timeout(function(){
        //     $scope.hideShow=!$scope.hideShow;
        
     //    }, 250);

    };

     $scope.clear = function () {
    $scope.dt = null;
  };

  
    $scope.minDate = $scope.minDate ? null : new Date("01/01/1950");
    var d = new Date();
    var n = d.getFullYear();
    n=n+1;
    var m="31/December/"+n;
    $scope.maxDate = new Date(m);


  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  $scope.open1 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened1 = true;
  };
  $scope.open2 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened2 = true;
  };
  $scope.open3 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened3 = true;
  };


  $scope.dateOptions = {
    formatYear: 'yyyy',
    startingDay: 1,
    minMode: 'month'
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  
     
    });
