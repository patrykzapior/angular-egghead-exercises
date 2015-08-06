'use strict';

var app = angular.module('app',[]);

app.controller("shopCtrl", function(){
    var ctrl = this;
    ctrl.isClicked = false;
    ctrl.name = '';
    ctrl.count = 0;
    ctrl.price = 0;
    ctrl.x = 0;

    ctrl.myFun = function(count,price){
        ctrl.x = count * price;
        ctrl.isClicked = true;
    }
});
