/**
 *  @desc Tests for the backend API
 *  @copyright (C) 2013 Jeroen Reurings, SpilGames
 *  @license BSD 3-Clause License (see LICENSE file in project root)
 */
glue.module.create(
    [
        'glue'
    ],
    function (Glue) {
        describe('glue.backend.api', function () {
            'use strict';

            describe('Branding', function () {
                it('Should be able to fetch image data', function (done) {
                    Glue.api.loadAPI(function(api) {
                        var logoData = api.Branding.getLogo();
                        expect(logoData).toEqual(jasmine.any(Object));
                        expect(logoData.image).toEqual(jasmine.any(String));
                        expect(logoData.link).toEqual(jasmine.any(String));
                        expect(logoData.posX).toEqual(jasmine.any(Number));
                        expect(logoData.posY).toEqual(jasmine.any(Number));
                        expect(logoData.scale).toEqual(jasmine.any(Number));
                        done();
                    });
                });
            });
        });
    }
);
