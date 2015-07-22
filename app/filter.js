'use strict';
var app = angular.module('app', []);


app.filter('quote',function(){
    return function(text){
        return '"'+text+'"';
    }
});
app.filter('withoutH', function () {
    return function(text){
        var x = text.replace('H','');
        return x.replace('h','');
    }
});

app.filter('firsLetterUp', function(){
    return function(text){
        var array = text.split(' ');
        for (var i=0;i<array.length;i++){
            array[i]=array[i].charAt(0).toUpperCase() + array[i].substring(1);
        }
        return array.join(' ');

    }
});

app.controller('FilterCtrl', function ($scope)
{
    $scope.data = {
        citation: 'To be, or not to be...',
        title: 'The Hobbit: The Battle of the Five Armies',
        someText: 'Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories.'
    };
});
