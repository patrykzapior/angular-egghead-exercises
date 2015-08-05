'use strict';

var app = angular.module('app', []);

app.factory('Order', function ($q)
{
    var names = [];
    var quantities = [];
    return {
        add: function (name, quantity)
        {
            names.push(name);
            quantities.push(quantity);
        },

        getItem: function (index)

        {
            var defer = $q.defer();
            defer.resolve(names[index]);
            return defer.promise;
        },

        getQuantity: function (index)
        {
            var defer = $q.defer();
            defer.resolve(quantities[index])
            return defer.promise;
        }
    };
});

app.controller('orderCtrl', function ($scope, $timeout, Order)
{
    var index = 0;
    $scope.name = 'Pasta';
    $scope.quantity = 4;
    $scope.orders = {name: [], quantity: []};

    $scope.addOrder = function (name, quantity)
    {

        if (name !== null && name !== undefined && quantity !== null && quantity !== undefined) {
            Order.add(name, quantity);
            $scope.added = true;
            $timeout(function ()
            {
                $scope.added = false;
            }, 1000);
            $scope.name = null;
            $scope.quantity = null;
        }
    };

    $scope.success = function ()
    {
        Order.getItem(index).then(function(data){
            $scope.orders.name.push(data);
        })

        Order.getQuantity(index).then(function(data){
            $scope.orders.quantity.push(data)
        })
        index++;
    };
});
