'use strict';

var calcApp = angular.module('calcApp', []);

calcApp.controller("SumCtrl", function($scope){
    this.firstNumber = 12;
    this.secondNumber = 1 ;

    this.addition = function(firstNumber, secondNumber){
        console.log(firstNumber + secondNumber);
        return firstNumber + secondNumber;

    }
    return $scope.SumCtrl = this;

})

calcApp.controller("SubCtrl", function($scope){
    this.firstNumber = 12;
    this.secondNumber = 1;

    this.subtraction = function(firstNumber,secondNumber){
        return firstNumber - secondNumber;
        //return sub;
    }
    return $scope.SubCtrl = this;
})