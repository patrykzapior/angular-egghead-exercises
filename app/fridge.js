'use strict';

var mailApp = angular.module('mailApp', []);

mailApp.controller('mailCtrl', function () {
    this.list = [
        "zapior.patryk@gmail.com",
        "marektabor@buziaczki.pl",
        "patryk.goracekakao@o2.pl",
        "pawel7.5cm@onet.pl"
    ];
    this.message;
    var click = false;
    var x = '';

    this.fun = function(value){
            this.x = value;
    }


    this.isClicked  = function(click){
        click = !click;
    }

    this.send = function(mail){
        if(this.x === undefined) {
            alert('Please choose email!');
        }else {
            this.message = mail;
            alert('Mail sended to: ' + this.x);
        }
    }


});

