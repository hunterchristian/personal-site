/*globals module:true,__dirname:true, process:true*/
var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {expand: true, src: ['index.html'], dest: '../dist/'},
                    {expand: true, src: ['assets/*'], dest: '../dist/'}
                ]
            }
        },
        sass: {
            dist: {
                files: {
                    '../dist/styles.css' : 'css/index.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss', '**/*.js', '**/*.html', '*.html'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'copy']);
    grunt.registerTask('default',['watch']);
}