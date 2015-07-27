'use strict';

var app = angular.module('app', []);

app.directive("enter", function(){
    return function ($scope, element, attr){
        element.bind("mouseenter", function(){
            element.addClass(attr.enter);
        })
    }
})
app.directive("leave", function(){
    return function ($scope, element, attr){
        element.bind("mouseleave", function(){
            element.removeClass(attr.enter);
        })
    }
})

app.directive("dblClickOn", function(){
    return function($scope, element, attr){
        element.bind("dblclick", function(){
            element.addClass(attr.dblClickOn);
        })
    }
})

app.directive("clickOn", function(){
    return function($scope, element, attr){
        element.bind("click", function(){
            element.removeClass(attr.dblClickOn);
        })
    }
})