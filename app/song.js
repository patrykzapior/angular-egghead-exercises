'use strict';

var songApp = angular.module('songApp', []);

songApp.factory('Song', function ()
{
    return {
        author: 'Gotye feat. Kimbra',
        title: 'Somebody That I Used To Know',

        sing: function ()
        {
            return 'But you did not have to cut me off... But you treat me like a stranger ...';
        },
        fake: function ()
        {
            return 'Buuuuuuuuuuuuuut you niah niah blah bla ...';
        }
    };
});

songApp.controller('SongCtrl', function ($injector)
{
    var ctrl = this;

    $injector.invoke (function(Song){
        ctrl.author = Song.author;
        ctrl.title  = Song.title;
        ctrl.sing   = Song.sing();
        ctrl.fake   = Song.fake();
    })
});
