(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.run(function ($templateCache)
    {

        var template = [];
        template[0] = '<div id="default"><div>Default template:</div><h3 id="templateContent">{{order}} x {{quantity}}</h3></div>';
        template[1] =
            '<div id="button"><div>Button template:</div>\n<div>\n    <h3 ng-click="content()" id="buttonTemplate"  class="btn btn-default">Click to see the order</h3>\n    <div ng-show="isContentVisible">\n        <h3 id="buttonContent" ng-if="quantity > 1" class="form-group">Your order: {{quantity}} {{order}}s</h3>\n        <h3 ng-if="quantity == 1" class="form-group">Your order: {{quantity}} {{order}}</h3>\n    </div>\n</div></div>';
        template[2] =
            '<div id="table"><h4>Table template:</h4>\n<table id="tableContent" class="table table-bordered">\n    <thead>\n    <tr>\n        <th class="text-center">Order</th>\n        <th class="text-center">Quantity</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>{{order}}</td>\n        <td>{{quantity}}</td>\n    </tr>\n    </tbody>\n</table></div>';
        $templateCache.put('default', template[0]);
        $templateCache.put('button', template[1]);
        $templateCache.put('table',  template[2]);
    });

    app.controller('urlCtrl', function ($scope)
    {
        $scope.order = 'pizza';
        $scope.quantity = 12;

    });
    app.directive('url', function ($compile,$templateCache)
    {

        var link = function (scope, element,attr)
        {
            scope.$watch(function ()
            {
                return attr.template;

            }, function (newValue, oldValue)
            {
                console.log(newValue)
                console.log($templateCache.get('table'))
                if(newValue === 'button'){
                    element.html($templateCache.get('button'));
                }
                else if(newValue === 'table'){
                    element.html($templateCache.get('table'));
                }
                else{
                    element.html($templateCache.get('default'));
                }

                $compile(element.contents())(scope);

            });
            scope.isContentVisible = false;

            scope.content = function ()
            {
                scope.isContentVisible = !scope.isContentVisible;
            };
        };

        return {
            restrict: 'E', replace: true, scope: {
                order: '@', quantity: '@'
            }, link: link
        };
    });
})();