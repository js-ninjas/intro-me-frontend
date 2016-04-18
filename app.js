
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);
//Define Routing for the application
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
