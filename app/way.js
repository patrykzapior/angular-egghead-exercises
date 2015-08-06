'use strict';

var wayApp = angular.module('wayApp', ['ngRoute']);

wayApp.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'views/way.html',
            controller: 'WayCtrl'

        }).when('/error', {
            templateUrl: 'views/way.html',
            controller: 'WayCtrl',
            resolve: {
                loadData: wayApp.error
            }
        }).when('/success', {
            templateUrl: 'views/rightWay.html',
            controller: 'WayCtrl',
            resolve: {
                loadData: wayApp.success
            }
        });
});

// add error directive here
wayApp.directive("error", function($rootScope) {
    return {
        restrict: "E",
        template: '<div class="alert alert-danger" ng-if="wrongWay">No, no, no. That is not good way!</div>',
        link: function(scope) {
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
                console.log(event)
                console.log(current)
                console.log(previous)
                console.log(rejection)
                scope.wrongWay = true;
            })
        }
    }
})

var WayCtrl = wayApp.controller('WayCtrl', function ($scope, $route) {
    $scope.alertMessage = 'You choose the right way! :)';
});

    WayCtrl.error = function ($q, $timeout) {
        var defer = $q.defer();
        $timeout(function () {
            defer.reject();
        }, 500);
        return defer.promise;
    };

    WayCtrl.success = function ($rootScope, $q, $timeout) {
        var defer = $q.defer();
        $rootScope.wrongWay = false;
        $timeout(function () {
            defer.resolve();
        }, 100);
        return defer.promise;
};