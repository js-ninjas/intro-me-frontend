'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
  .controller('experienceCtrl', function ($scope,$route,$http) {
       
     $scope.project="Add";
     $scope.projectBtn="Save";
     $scope.del="Company";
     $scope.childIndex=null;
     $scope.parentIndex=null;
     $scope.maxDateProject=null;
     $scope.minDateProject=null;
     $scope.myAlert=true;
     $scope.masterData=null;
     var queryName=null;

     $scope.months=[ 'January','February','March','April','May','June','July' ,'August','September','October','November','December']
    //Experiance JSON
    	
    $scope.experiences=null;


    var req = {
	     method: 'GET',
	     url: 'http://localhost:8000/experience',
	     headers: {
	       'Content-Type': 'application/JSON'
	     }
	    }
	    $http(req).then(function mySucces(response) {
	       
	        $scope.experiences = response.data;
	        $scope.masterData = response.data;
	        if($scope.experiences.length==0)
			   {
			   	$scope.myAlert=true;
			   }
			   else
			   {
			   	$scope.myAlert=false;
			   }
			   console.log(response.data);
	    },function myError(response) {
	    	console.log(response);
	        $scope.nodejsVal = response.statusText;
	         alert("myError  "+$scope.nodejsVal);
     });

// add edit projects

$scope.addProject=function(index){
	$scope.project="Add";
	$scope.projectBtn="Save";
	$scope.childIndex=null;
	$scope.parentIndex=index;
    var d= $scope.experiences[index].from;
    var dd= $scope.experiences[index].to;
    $scope.minDateProject = new Date(d);
	$scope.maxDateProject= new Date(dd);
};

$scope.editProject=function(index,parent){
 $scope.project="Edit";
 $scope.projectBtn="Update";
 $scope.childIndex=index;
 $scope.parentIndex=parent;

 	var d= $scope.experiences[parent].from;
    var dd= $scope.experiences[parent].to;


	$scope.minDateProject = $scope.minDateProject ? null : new Date("01/March/2011");
	$scope.maxDateProject=$scope.minDateProject ? null : new Date(dd);
 $scope.projectData=$scope.experiences[parent].projects[index];
 console.log(index,parent);
};
// Saving and updating projects
$scope.saveUpdateProject=function(data)
{
 	console.log($scope.childIndex,$scope.parentIndex);
 	data.to=$scope.months[new Date(data.to).getMonth()]+"-"+ new Date(data.to).getFullYear();
	data.from=$scope.months[new Date(data.from).getMonth()]+"-"+ new Date(data.from).getFullYear();
	
	 if($scope.childIndex==null)
	 {
	 	// Save New Project 
	 	$scope.experiences[$scope.parentIndex].projects.push(data);
	 	var fData=$scope.experiences[$scope.parentIndex];
	 	delete fData['_id'];
	 	fData=angular.toJson(fData);
	 	var jsonData =angular.toJson(fData);
        var abc='?company='+$scope.masterData[$scope.parentIndex].company;
        var req = {
	     method: 'PUT',
	     url: 'http://localhost:8000/experience'+abc,
	     headers: {
	       'Content-Type': 'application/JSON'
	     },
	     data:jsonData
	    };
	    $http(req).then(function mySucces(response) {
	         console.log("SUCCESS DATA");
	         console.log(response.data);
	    },function myError(response) {
	    	 console.log(response);
	         //$scope.nodejsVal = response.statusText;
	         //alert("myError  "+$scope.nodejsVal);
		 });
		 $scope.projectData=null; //setting html's add/edit model object to null 
	 }
	 else
	 {
	 	// update Project
	 	$scope.experiences[$scope.parentIndex].projects[$scope.childIndex]=data;
	 	var fData=$scope.experiences[$scope.parentIndex];
	 	delete fData['_id'];
	 	fData=angular.toJson(fData);
	 	var jsonData =angular.toJson(fData);
        var abc='?company='+$scope.masterData[$scope.parentIndex].company;
        var req = {
	     method: 'PUT',
	     url: 'http://localhost:8000/experience'+abc,
	     headers: {
	       'Content-Type': 'application/JSON'
	     },
	     data:jsonData
	    };
	    $http(req).then(function mySucces(response) {
	         console.log("SUCCESS DATA");
	         console.log(response.data);
	    },function myError(response) {
	    	 console.log(response);
	         // $scope.nodejsVal = response.statusText;
	         // alert("myError  "+$scope.nodejsVal);
		 });
	 	$scope.projectData=null; //setting html's add/edit model object to null 
	 }
 	$scope.childIndex=null;
 	$scope.parentIndex=null;
};

//Project experiance edit and save 
$scope.addExperience=function()
{
	$scope.project="Add";
 	$scope.projectBtn="Save";
};

$scope.editExperiance=function(index)
{	
	$scope.parentIndex=index;
	$scope.project="Edit";
 	$scope.projectBtn="Update";
 	console.log(index);
 	$scope.experinceData=$scope.experiences[index];
 	queryName=$scope.experiences[$scope.parentIndex].company;
 	console.log(queryName);


};
$scope.saveUpdateExprience=function(data)
{
	if($scope.parentIndex==null)
	{
		// Save New Experience 
		data.to=$scope.months[new Date(data.to).getMonth()]+"-"+ new Date(data.to).getFullYear();
	 	data.from=$scope.months[new Date(data.from).getMonth()]+"-"+ new Date(data.from).getFullYear();
		var temp={};
		temp['company']=data.company;
		temp['from']=data.from;
		temp['to']=data.to;
		temp['projects']=[];
		
		$scope.experiences.push(temp);
        var req = {
	     method: 'POST',
	     url: 'http://localhost:8000/experience',
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
	    $scope.experinceData=null;
		}
	else
	{
		// update Experience
		data.to=$scope.months[new Date(data.to).getMonth()]+"-"+ new Date(data.to).getFullYear();
	 	data.from=$scope.months[new Date(data.from).getMonth()]+"-"+ new Date(data.from).getFullYear();
		var abc='?company='+queryName;
		$scope.experiences[$scope.parentIndex]=data;
	 	console.log("Updating Values !!!!");
	 	
	 	
	 	delete data['_id'];
	 	data=angular.toJson(data);
	 	var jsonData =JSON.stringify(data);
        var req = {
	     method: 'PUT',
	     url: 'http://localhost:8000/experience'+abc,
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
	    $scope.experinceData=null;
	}
	$scope.childIndex=null;
 	$scope.parentIndex=null;
};


// DELETE PROJECT OR EXPERIANCE
$scope.deleteExperiance=function(index)
{
	$scope.del="Company";
	$scope.childIndex=null;
 	$scope.parentIndex=index; 
    console.log(index);
};
$scope.deleteProject=function(index,parent)
{
	$scope.del="Project";
	$scope.childIndex=index;
 	$scope.parentIndex=parent; 
};
$scope.delete=function()
{
	if($scope.childIndex==null)
	{
		// Delete  whole Experince
		console.log($scope.parentIndex);
	 	console.log("Deleting experiance !!!!");
	 	
			

	 	queryName=$scope.experiences[$scope.parentIndex].company
	 	$scope.experiences.splice($scope.parentIndex, 1);

	 	var abc='?company='+queryName;

        var req = {
	     method: 'DELETE',
	     url: 'http://localhost:8000/experience'+abc,
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
	    $scope.experinceData=null;


	}
	else
	{
		// Delete Project
		console.log($scope.childIndex,$scope.parentIndex);
	 	console.log("deleting Project !!!!");

	 	if ($scope.childIndex > -1)
	 	{
			$scope.experiences[$scope.parentIndex].projects.splice($scope.childIndex, 1);
		}
	 	var fData=$scope.experiences[$scope.parentIndex];
	 	delete fData['_id'];
	 	fData=angular.toJson(fData);
	 	var jsonData =angular.toJson(fData);
	 	var abc='?company='+$scope.masterData[$scope.parentIndex].company;
        var req = {
	     method: 'PUT',
	     url: 'http://localhost:8000/experience'+abc,
	     headers: {
	       'Content-Type': 'application/JSON'
	     },
	     data:jsonData
	    };
	    $http(req).then(function mySucces(response) {
	         console.log("SUCCESS DATA");
	         console.log(response.data);
	    },function myError(response) {
	    	 console.log(response);
	         $scope.nodejsVal = response.statusText;
	         alert("myError  "+$scope.nodejsVal);
		 });
	 	$scope.projectData=null; //setting html's add/edit model object to null 
	}
	$scope.childIndex=null;
 	$scope.parentIndex=null;

};


 //datepicker start
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
        $scope.open1 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened1 = true;
        };
        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1,
            minMode: 'month'
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];


  });
