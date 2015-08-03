'use strict';

var element = angular.module('elementApp', []);

element.directive('findElement', function ()
{

    var validElement = angular.element('<h4></h4>');

    //create link function
    var link = function (scope)
    {
        scope.$watch('input', function(value){
                if(value === 'circle'){
                    validElement.removeClass('text-danger');
                    validElement.removeClass('square');
                    validElement.addClass('circle');
                    validElement.text('');
                }
                else if(value === 'square'){
                    validElement.removeClass('text-danger');
                    validElement.removeClass('circle');
                    validElement.addClass('square');
                    validElement.text('');
                }
                else {
                    validElement.removeClass('circle');
                    validElement.removeClass('square');
                    validElement.addClass('text-danger');
                    validElement.text('You did not enter *circle* or *square*');

                }
            }
        )
    };

    return {
        restrict: 'E',
        replace: true,
        template: '<div> <input class="form-control" type="text" ng-model="input" placeholder="Write circle or square"></div>',
        compile: function (templateElement)
        {
            templateElement.append(validElement);
            return link;
        }

    };
});