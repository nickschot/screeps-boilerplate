module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        clean: ['dist'],

        shell: {
            build: {
                command: 'npm run build:broccoli'
            }
        },

        screeps: {
            options: {
                email: process.env.EMAIL,
                password: process.env.PASSWORD,
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'shell:build']);
    grunt.registerTask('deploy', ['build', 'screeps']);
};