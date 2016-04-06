'use strict';

angular
    .module('myApp', ['ngRoute','myApp.controllers'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
            
        });
    
        $routeProvider.otherwise({
            redirectTo: '/'
        });
)];