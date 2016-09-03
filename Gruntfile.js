/*globals module:true,__dirname:true, process:true*/
var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/'},
                    {expand: true, cwd: 'src/', src: ['assets/**/*'], dest: 'dist/'}
                ]
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/styles.css' : 'src/css/index.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['src/**/*.scss', 'src/**/*.js', 'src/**/*.html', 'src/*.html'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('build', ['sass', 'copy']);
    grunt.registerTask('default',['watch']);
};