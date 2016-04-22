'use strict';

/**
 * @ngdoc overview
 * @name introMeApp
 * @description
 * # introMeApp
 *
 * Main module of the application.
 */
angular
    .module('introMeApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'profileCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'registerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
