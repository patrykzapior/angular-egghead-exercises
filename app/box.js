'use strict';
var app = angular.module('boxApp', []);

app.controller('BoxCtrl', function ($scope)
{
    $scope.showInside = function (size, name, color)
    {
        alert('My name is : ' + name + '. I am ' + size + ' and ' + color);
    };
});

app.directive('box', function ()
{
    return {
        restrict: 'E',
        scope: {
            color: '=',
            size: '@',
            open: '&'
        },

        templateUrl: 'boxTemplate.html',

        link: function (scope)
        {
            scope.name = 'Box';
            scope.colors = ['red', 'green', 'blue'];
            scope.color = scope.colors[0];
        }
    };
});
