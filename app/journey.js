'use strict';

var journeyApp = angular.module('journeyApp', ['ngRoute']);

journeyApp.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'views/start.html', controller: 'StartCtrl'
    }).when('/home', {
        templateUrl: 'views/home.html', controller: 'HomeCtrl', resolve: {
            loadData: StartCtrl.loadHome
        }
    }).when('/forest', {
        templateUrl: 'views/forest.html', controller: 'ForestCtrl', resolve: {
            loadData: StartCtrl.loadForest
        }
    }).otherwise({
        redirectTo: '/'
    });
});

journeyApp.controller('JourneyCtrl', function ($scope, $rootScope)
{
    $scope.things = [{name: 'basket'}, {name: 'chicken'}, {name: 'apples'}, {name: 'phone'}, {name: 'matches'}];
    $scope.data = {selectedThing: $scope.things[0].name};

    $rootScope.$on('$routeChangeStart', function ()
    {
        $scope.start = "The mission was started!";
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current)
    {

        if (undefined !== current.locals.loadData) {
            console.log(current.locals.loadData)
            if(current.locals.loadData.space === 'Kitchen'){
                $scope.mission = "to make dinner";
            }else {
                $scope.mission = "light a campfire";
            }
        }
    });
});

var StartCtrl = journeyApp.controller('StartCtrl', function ($scope, $route, $location, $timeout)
{
    $scope.goHome = function (){
        $location.path("/home");
    }

    $scope.goForest = function () {
        $location.path("/forest");
    }
});

journeyApp.controller('HomeCtrl', function ($scope, loadData)
{
    $scope.message = loadData.message;
});

journeyApp.controller('ForestCtrl', function ($scope, loadData)
{
    $scope.message = loadData.message;
});

StartCtrl.loadHome = function ($q, $timeout)
{
    var defer = $q.defer();
    $timeout(function ()
    {
        defer.resolve({
            message: '...in the kitchen.', space: 'Kitchen'
        });
    }, 500);
    return defer.promise;
};

StartCtrl.loadForest = function ($q, $timeout)
{
    var defer = $q.defer();
    $timeout(function ()
    {
        defer.resolve({
            message: '...in the deep, deep wood.', space: 'Wood'
        });
    }, 500);
    return defer.promise;
};
