describe('app', function ()
{
    'use strict';

    var setCtrl;
    var appCtrl;
    var unSuccessCtrl;
    var promises;

    beforeEach(module('simpleExercise'));

    beforeEach(inject(function ($controller)
    {
        promises = jasmine.createSpyObj('promises', ['set', 'getSuccess', 'getUnSuccess']);
        promises.getSuccess.andReturn(successfulPromise('Everything is fine!'));
        promises.getUnSuccess.andReturn(unsuccessfulPromise('You have some errors!'));

        appCtrl = $controller('AppCtrl', {promises: promises});
        setCtrl = $controller('SetCtrl', {promises: promises});
        unSuccessCtrl = $controller('UnSuccessCtrl', {promises: promises});
    }));

    describe('SetCtrl', function ()
    {
        describe('getSuccess function', function ()
        {

            it('should call set function with arguments', function ()
            {
                setCtrl.set({success: 'Everything is fine!', unSuccess: 'You have some errors!'});
                expect(promises.set).toHaveBeenCalledWith('Everything is fine!', 'You have some errors!');
            });
            it('should call set function with arguments', function ()
            {
                setCtrl.set({success: 'Everything is ok!', unSuccess: 'You have some bugs!'});
                expect(promises.set).toHaveBeenCalledWith('Everything is ok!', 'You have some bugs!');
            });

        });

    });

    describe('AppCtrl', function ()
    {
        describe('get function', function ()
        {
            beforeEach(function ()
            {
                appCtrl.get();
            });
            it('should call get function and return promise', function ()
            {
                expect(promises.getSuccess).toHaveBeenCalled();
            });
            it('should set success message', function ()
            {
                expect(appCtrl.success).toEqual('Everything is fine!');
            });
        });

    });

    describe('UnSuccessCtrl', function ()
    {
        describe('getUnSuccess function', function ()
        {
            beforeEach(function ()
            {
                unSuccessCtrl.getUnSuccess();
            });
            it('should call getUnSuccess function', function ()
            {
                expect(promises.getUnSuccess).toHaveBeenCalled();
            });
            it('should set unSuccess message', function ()
            {
                expect(unSuccessCtrl.unSuccess).toEqual('You have some errors!');
            });

        });

    });


});
