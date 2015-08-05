(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing here
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',
            {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/details/:brand/:capacity',
            {
                templateUrl: 'views/details.html',
                controller: 'routeCtrl'
            }).when('/secret',
            {
                templateUrl: 'views/secret.html',
                controller: 'routeCtrl'
            })
            .when('/inputs/:brand/:capacity',
            {
                redirectTo: function(routeParams,path,search){
                    var secret = path.split('/').indexOf('secret');
                    if(secret !==-1){
                        return '/' + 'secret';
                    }
                    else if(routeParams.brand && routeParams.capacity){
                        return '/' + 'details'+'/'+routeParams.brand+'/'+routeParams.capacity;
                    }
                    else {
                        return '/';
                    }
                }
            }).otherwise({
                redirectTo: '/'
            })
    })

    app.controller('homeCtrl', function ($scope)
    {
        $scope.$root.condition = true;
        $scope.car = {brand: 'Ferrari', capacity: 3.5};
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
