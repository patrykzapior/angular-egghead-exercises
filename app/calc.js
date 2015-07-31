'use strict';

var calcApp = angular.module('calcApp', []);

calcApp.controller("SumCtrl", function($scope){
    this.firstNumber = 12;
    this.secondNumber = 1 ;

    this.addition = function(a, b){
        this.sum = a + b;

    }
    return $scope.SumCtrl = this;

})

calcApp.controller("SubCtrl", function($scope){
    this.firstNumber = 12;
    this.secondNumber = 1;

    this.subtraction = function(a, b){
        this.sub = a - b;
    }
    return $scope.SubCtrl = this;
})