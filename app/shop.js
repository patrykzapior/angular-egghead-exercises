'use strict';

var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope)
{
    var sweets = ['Sugar Daddy', 'Nerds', 'Jawbreakers', 'Starburst', 'Milky Way', 'Skittles', 'Jelly Belly'];
    var cakes = ['Banoffee pie', 'Brownie', 'Butter cake', 'Chocolate cake', 'Cupcake', 'Karpatka'];
    $scope.sweets = [];
    $scope.cakes = [];
    $scope.cart = [];

    angular.forEach(sweets, function (sweet)
    {
        $scope.sweets.push({name: sweet});
    });
    angular.forEach(cakes, function (cake)
    {
        $scope.cakes.push({name: cake});
    });

    $scope.buyProduct = function (product)
    {
        product != null ? $scope.cart.push({name: product}) : false;
    };
});

app.directive('orderComponent', function ()
{
    var template = '<div class="panel panel-success text-center"><p class="panel-heading"><strong>I want to buy:</strong></p><div class="panel-body">' +
            '<select class="form-control form-group" ng-options="item.name for item in products" ng-model="item"><!--select element--></select>' +
            '<div id="buyButton" class="btn btn-success" ng-click="buy(item)"><!--the bottom div-->Buy!</div></div></div>';
    return {
        template: template,

        scope: {
            products: '=',
            buy: '&'
        }
    };


});
