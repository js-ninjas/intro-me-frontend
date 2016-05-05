'use strict';

/**
 * @ngdoc function
 * @name introMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the introMeApp
 */
angular.module('introMeApp')
    .controller('photosCtrl', function ($scope) {
        $scope.imageSrcs = [
            {
                imgSrc: "/images/a.jpg"
            },
            {
                imgSrc: "/images/b.jpg"
            },
            {
                imgSrc: "/images/c.jpg"
            },
            {
                imgSrc: "/images/d.jpg"
            }
        ];
     
    });
