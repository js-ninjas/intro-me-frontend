
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);
//Define Routing for the application
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }).when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileController'
            }).otherwise({
                redirectTo: '/'
            });
    }]);
