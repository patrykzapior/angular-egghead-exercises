var app = angular.module('app', []);

app.controller("AppCtrl", function($scope) {

    $scope.addRed = function () {
        alert("Alarm red!")
    },
    $scope.addYellow = function () {
        alert("Alarm yellow!")
    },
    $scope.addGreen = function () {
        alert("Alarm green!")
    }
}),


app.directive("alarm", function(){
    return{
        restrict: 'A',
        scope: {
            addRed: '&',
            addYellow: '&',
            addGreen: '&',
        },
    }
});

    app.directive("red", function(){
    return{
        link: function(scope, element){
            element.bind("click", function(){
                scope.addRed();
            })
        }
    }
}),

    app.directive("yellow", function(){
        return{
            link: function(scope, element){
                element.bind("dblclick", function(){
                    scope.addYellow();
                })
            }
        }
}),
    app.directive("green", function(){
        return{
            link: function(scope, element){
                element.bind("mouseenter", function(){
                    scope.addGreen();
                })
            }
        }
});
