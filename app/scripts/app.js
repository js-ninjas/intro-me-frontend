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
            .when('/hobbies', {
                templateUrl: 'views/hobbies.html',
                controller: 'hobbiesCtrl'
            })
            .when('/photos', {
                templateUrl: 'views/photos.html',
                controller: 'photosCtrl'
            })
            .when('/education', {
                templateUrl: 'views/education.html',
                controller: 'educationCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
