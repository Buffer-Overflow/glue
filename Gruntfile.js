module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-contrib*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                files: {
                    'build/src/libraries.js': [
                        'bower_components/requirejs/require.js'
                    ],
                    'build/src/engines.js': [
                        'bower_components/melonjs/build/melonJS-0.9.10.js'
                    ],
                    'build/src/modules.js': [
                        'js/modules/spilgames/*.js'
                    ],
                    'build/src/adapters.js': [
                        'js/adapters/**/*'
                    ],
                    'build/src/base.js': [
                        'js/glue.js'
                    ],
                    'build/src/gluemodules.js': [
                        'js/modules/spilgames/entity/behaviour/*.js'
                    ],
                    'build/glue.js': [
                        'build/src/libraries.js',
                        'build/src/engines.js',
                        'build/src/modules.js',
                        'build/src/adapters.js',
                        'build/src/base.js',
                        'build/src/gluemodules.js'
                    ]
                }
            },
        },
        uglify: {
            dist: {
                files: {
                    'build/glue.min.js': [
                        'build/glue.js'
                    ]
                }
            }
        },
        clean: {
            beforeRelease: [
                'build/**/*.js'
            ],
            afterRelease: [
                //'build/src'
            ]
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', [
        'clean:beforeRelease',
        'concat',
        'uglify',
        'clean:afterRelease'
    ]);
    // Default task(s).
    grunt.registerTask('dev', [
        'clean:beforeRelease',
        'concat',
        'clean:afterRelease'
    ]);
};
