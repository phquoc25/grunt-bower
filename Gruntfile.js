module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		babel: {
			options: {
				sourceMap: true
			},
			build: {
				files: [{
					expand: true,
					cwd: "src",
					src: ["**/*.js"],
					dest: "dist/src"
				}]
			}
		},
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: ['dist/**/*.js'],
				// the location of the resulting JS file
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				// more options here if you want to override JSHint default
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		eslint: {
			target: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'karma']
		},
		clean: ['dist', 'coverage']
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('test', ['karma']);

	grunt.registerTask('default', ['clean', 'karma', 'babel', 'concat', 'uglify']);
};