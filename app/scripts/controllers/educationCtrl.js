'use strict';

angular.module('introMeApp')
    .controller('educationCtrl', function ($scope,$route, $http) {
        $scope.hideShow=true;
    $scope.editShow=false;
    var oldeducation=null;
       
     $scope.personInfo={company: "TCS" ,contactNo: "9876543210", email: "abcdEF@gmail.com", fName: "Mohammad",homeTown:"Hazaribagh",lName:"Hussain",location:"India",mDate:"May/2001",iDate:"May/2003",gDate:"July/2007",pDate:"August/2009"};

     $scope.education=null;
     var req = {
                 method: 'GET',
                 url: 'http://localhost:8000/education',
                 headers: {
                   'Content-Type': 'application/JSON'
                 }
                }
                /*We have to work on this for getting results on the basis of userid 
                so that we will get resonce based on user logged in */
              $http(req).then(function mySucces(response) {
                 
                  $scope.education =response.data[0];   
                  console.log("opening editShow");
                  console.log(angular.equals({}, $scope.education) || $scope.education==null);
                  if(angular.equals({}, $scope.education) || $scope.education==null)
                    {
                      //alert("alert");
                      
                      $scope.showEdit();
                      //console.log("I ENABLANING EDIT");
                    };
                },function myError(response) {

                      console.log(response);
                      $scope.nodejsVal = response.statusText;
                      alert("myError  "+$scope.nodejsVal);
                });



//if($scope.education=)
$scope.showEdit=function()
    {
         $scope.hideShow=false;
         $scope.editShow=true;
         oldeducation=$scope.education;
         console.log(angular.equals({}, oldeducation));
    };
    
    $scope.hideEdit=function()
    {

        $scope.editShow=!$scope.editShow;
        $scope.hideShow=!$scope.hideShow;
        oldeducation=null;
        $route.reload();
        console.log("dasdkjlasjd")
        console.log(angular.equals({}, oldeducation));

    };

    

  
  $scope.saveEducationDetails=function(educationData)
  {

   // alert("hijiiji");
    

    if(angular.equals({},oldeducation) || oldeducation==null) // Post request to save education details
      {
        console.log("save valued");
        //alert("hijiiji");
        $scope.education=educationData;
        educationData['userId']="12345"
        var data=angular.toJson(educationData);
        
        data=JSON.stringify(data);
        console.log("Data for Post request");
        console.log(data);

               var req = {
                 method: 'POST',
                 url: 'http://localhost:8000/education',
                 headers: {
                   'Content-Type': 'application/JSON'
                 },
                 data:data
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
      else // Put request to update education details  url: 'http://localhost:8000/experience'+abc,
      {
        $scope.education=educationData;
        delete educationData['_id'];
        delete educationData['userId'];
        var data=angular.toJson(educationData);
        
        data=JSON.stringify(data);
        var abc="?userId=12345";
               var req = {
                 method: 'PUT',
                 url: 'http://localhost:8000/education'+abc,
                 headers: {
                   'Content-Type': 'application/JSON'
                 },
                 data:data
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
      $scope.hideEdit();
       
  }


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
