'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
  .controller('experienceCtrl', function ($scope,$route) {
       
     $scope.project="Add";
     $scope.projectBtn="Save";
     $scope.childIndex=null;
     $scope.parentIndex=null;
     $scope.maxDateProject=null;
     $scope.minDateProject=null;
    //Experiance JSON
    $scope.experiences =[
	  {
	    company: "TCS",
	    from: "March-2011",
	    to: "May-2014",
	    projects: [
	      {
	        project: "TCS",
	        from: "March-2011",
	        to: "May-2012",
	        description: "hi s,dnsa,d dsalklksda laksdlkjdas ;kds;ak;dask;k sadkjsd lksdjlksda knlkdjsalkjdsa ljdlsklsda  sjh dsjh kjshdk kjshda jkhdsa kjhdsa khasdk ksadhkds khsdak kjhsdka skahdkds nslkdjlkajsdlkas lkjdlkadlsa ldlsajdljasld lkjdljsdaljdlldskjdsalkjsdlajdsa jsdkl skjdklsj dkslajlksd dsalkjsdl lkjdslkasd hello"
	      },
	      {
	        project: "TCS",
	        from: "June-2013",
	        to: "May-2014",
	        description: "hi hello"
	      },
	      {
	        project: "TCS",
	        from: "July-2014",
	        to: "May-2015",
	        description: "hi hello"
	      }
	    ]
	  },
	  {
	    company: "McKinsey",
	    from: "March-2011",
	    to: "May-2014",
	    projects: [
	      {
	        project: "TCS",
	        from: "March-2011",
	        to: "May-2012",
	        description: "hi hello"
	      },
	      {
	        project: "TCS",
	        from: "June-2013",
	        to: "May-2014",
	        description: "hi hello"
	      },
	      {
	        project: "TCS",
	        from: "July-2014",
	        to: "May-2015",
	        description: "hi hello"
	      }
	    ]
	  },
	  {
	    company: "Infosys",
	    from: "March-2011",
	    to: "May-2014",
	    projects: [
	      {
	        project: "TCS",
	        from: "March-2011",
	        to: "May-2012",
	        description: "hi hello"
	      },
	      {
	        project: "TCS",
	        from: "June-2013",
	        to: "May-2014",
	        description: "hi hello"
	      },
	      {
	        project: "TCS",
	        from: "July-2014",
	        to: "May-2015",
	        description: "hi hello"
	      }
	    ]
	  }
	];

	$scope.load=function()
	{
		$route.reload();
	};

	
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
   
    //Experiance JSON
    console.log($scope.maxDateProject);
    console.log($scope.minDateProject);
	console.log(index);
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
	 if($scope.childIndex==null)
	 {
	 	// Save New values 
	 	$scope.experiences[$scope.parentIndex].projects.push(data);
	 	console.log("Savin Values !!!!");
	 }
	 else
	 {
	 	// update values
	 	$scope.experiences[$scope.parentIndex].projects[$scope.childIndex]=data;
	 	console.log("Updating Values !!!!");
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


};
$scope.saveUpdateExprience=function(data)
{
	if($scope.parentIndex==null)
	{
		// Save New Experience 
		var temp={};
		temp['company']=data.company;
		temp['from']=data.from;
		temp['to']=data.to;
		temp['projects']=[];
		$scope.experiences.push(temp);
		console.log(temp);
		console.log("Savin Values !!!!");
	}
	else
	{
		// update Experience
		$scope.experiences[$scope.parentIndex]=data;
	 	console.log("Updating Values !!!!");
	 	console.log(data);
	}
	$scope.childIndex=null;
 	$scope.parentIndex=null;
};


// DELETE PROJECT OR EXPERIANCE
$scope.deleteExperiance=function(index)
{
	$scope.childIndex=null;
 	$scope.parentIndex=index; 
    console.log(index);
};
$scope.deleteProject=function(index,parent)
{
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
	 	if ($scope.parentIndex > -1)
	 	{
			$scope.experiences.splice($scope.parentIndex, 1);
		}

	 	//delete $scope.experiences[$scope.parentIndex];
	 	console.log($scope.experiences);

	 	// $scope.load();
	 	//$route.reload();
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
	 	// delete $scope.experiences[$scope.parentIndex].projects[$scope.childIndex];
	 	console.log($scope.experiences[$scope.parentIndex].projects);

	 	// $scope.load();
	 	//$route.reload();
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

 //////////////date end

  });
