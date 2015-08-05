(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'views/product.html',
            controller: 'catchErrorCtrl'
        });
        $routeProvider.when('/order', {
            templateUrl: 'views/order.html',
            resolve: {
                error: error
            }
        });
        $routeProvider.when('/displayOrder', {
            templateUrl: 'views/order.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    var productCatch;

    app.controller('catchErrorCtrl', function ($scope)
    {
        $scope.product = {name: 'tomato soup'};

        $scope.$watch('product', function (newValue)
        {
            productCatch = newValue;
        });
    });

    app.controller('OrderCtrl', function ($rootScope, $location, $scope)
    {

        $scope.rejectProduct = {};

        $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
            if(rejection.quantity === undefined || rejection.price === undefined){
                $scope.class = 'alert alert-danger';
                $scope.message = 'You give wrong data';
                $scope.rejectProduct.cost = 0;
            } else {
                $scope.rejectProduct.name = rejection.name;
                $scope.rejectProduct.cost = rejection.price * rejection.quantity;
                $scope.class = 'alert alert-success';
                $scope.message = 'You give correct data';
            }
            $location.path('/displayOrder');
        })
    });

    var error = function ($q){
        var defer = $q.defer();
        defer.reject(productCatch);
        return defer.promise;
    }

})();
