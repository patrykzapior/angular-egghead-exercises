'use strict';

var app = angular.module('app', []);

app.controller('SnowCtrl', function ($scope)
{
    $scope.snow = [];

    $scope.addPetal = function(){
        $scope.snow.push({petal: '*'});
    };
    $scope.removePetal = function(){
        $scope.snow.splice(0,1);
    };

//    addPetal function
//    removePetal function
});

//    add enter directive
app.directive("enter", function(){
    return function (scope, element, attr){
        element.bind("mouseenter", function(){
            scope.$apply(attr.enter);
        })
   }
});
