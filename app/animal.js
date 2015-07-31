'use strict';

var animalApp = angular.module('animalApp', []);

animalApp.directive('animal', function ()
{
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        transclude: true,
        template: '<div class="col-md-4">' +
                '<h3>{{name}}</h3>' +
                '<div>' +
                '<div ng-switch on="name">' +
                '<div ng-switch-when="dog"><div class="btn btn-default" ng-transclude><img src="assets/dog.png"></div></div>' +
                '<div ng-switch-when="cat"><div class="btn btn-default" ng-transclude><img src="assets/cat.png"></div></div>' +
                '<div ng-switch-when="pig"><div class="btn btn-default" ng-transclude><img src="assets/pig.jpg"></div></div>' +
                '</div></div>'
    };
});
