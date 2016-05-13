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

	 if($scope.experiences!=null)
    {
	$scope.hideShow=true;
    $scope.editShow=false;
    }
    else
    {
    	$scope.hideShow=false;
    $scope.editShow=true;
    	
    }
    // Experience JSON
     $scope.personInfo={company: "TCS" ,contactNo: "9876543210", email: "abcdEF@gmail.com", fName: "Mohammad",homeTown:"Hazaribagh",lName:"Hussain",location:"India",mDate:"May-2001",iDate:"May-2003",gDate:"July-2007",pDate:"August-2009"};

$scope.showEdit=function()
    {
         $scope.hideShow=false;
         $scope.editShow=true;
    };
    
    $scope.hideEdit=function()
    {	
    	 if($scope.experiences==null)
		    {
			$scope.hideShow=true;
		    $scope.editShow=false;
			}
		    else
		    {
       			 $scope.editShow=!$scope.editShow;
       			 $scope.hideShow=!$scope.hideShow;
       		}
       
    };



  });
