(function () {
    'use strict';
    angular.module('countryStateCity').directive('state', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            controller: 'stateCtrl as stateCtrl',
            templateUrl: 'templates/state.tpl.html',
            require: "^country",
            transclude: true,
            link: function (scope, element, attrs, countryCtrl) {
                scope.$watch(function () {
                    return countryCtrl.chooseCountry;
                }, function (newValue) {
                    if (newValue) {
                        scope.country = newValue;
                    }
                });
            }
        };
    });
})();
