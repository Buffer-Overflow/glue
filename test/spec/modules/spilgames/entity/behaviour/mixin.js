/**
 *  @desc Tests for the Scroll Button
 *  @author Jeroen Reurings
 *  @copyright © 2013 - SpilGames
 */
glue.module.create(['glue'], function (Glue) {
    describe('spilgames.entity.scrollbutton', function () {
        'use strict';
        describe('Modules', function () {
            it('Should be able to create a scrollbutton entity', function (done) {
                var updated = false,
                    drawn = false;

                glue.module.create(
                    'scrollbutton',
                    [
                        'glue',
                        'modules/spilgames/entity/base',
                        'modules/spilgames/entity/behaviour/hoverable',
                        'modules/spilgames/entity/behaviour/clickable'
                    ],
                    function (Glue, Base, Hoverable, Clickable) {
                        return function (x, y, settings) {
                            // get the base entity and extend it
                            var obj = Base(x, y, settings).inject({
                                draw: function (context) {
                                    drawn = true;
                                    this.parent(context);
                                },
                                update: function () {
                                    updated = true;
                                    return true;
                                },
                                clicked: function () {
                                    console.log(obj.name, 'clicked');
                                },
                                hovered: function () {
                                    console.log(obj.name, 'hovered');
                                }
                            });

                            // mix in the hoverable functionality
                            Hoverable(obj);
                            // mix in the clickable functionality
                            Clickable(obj);
                            // return the mixed object
                            return obj;
                        };
                    }
                );

                glue.module.get(
                    ['scrollbutton'],
                    function (Scrollbutton) {
                        me.game.add(Scrollbutton(0, 300, {
                            name: 'scrollbutton',
                            height: 105,
                            spritewidth: 102,
                            image: 'leftButton'
                        }), 1);

                        expect(me.game.getEntityByName('scrollbutton')[0].name).toEqual('scrollbutton');
                        setTimeout(function () {
                            expect(updated).toBeTruthy();
                            expect(drawn).toBeTruthy();
                            done();
                        }, 30);
                    }
                );
            });
        });
    });
});