// Gulp
var gulp            = require('gulp');

// Sass/CSS stuff
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var minifycss       = require('gulp-clean-css');
var imagemin        = require('gulp-imagemin');
var del				= require('del');

// compile all your Sass
gulp.task('sass', function (){
	gulp.src('./src/assets/source/styles/**/*.scss')
		.pipe(sass({
			includePaths: ['./src/assets/source/styles'],
			outputStyle: 'expanded'
		}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('./src/assets/source/styles'))
		.pipe(minifycss())
		.pipe(gulp.dest('./src/assets/build/styles'));
});

// Images

gulp.task('imagemin', function () {
	gulp.src('./src/assets/source/images/**/*.{png,jpg,jpeg,svg,gif}')
	.pipe(imagemin({
		optimizationLevel: 5,
		progressive: false,
		multipass: true,
		interlaced: false
	}))
	.pipe(gulp.dest('./src/assets/build/images/'));
});
 
gulp.task('default', ['sass', 'imagemin'], function() {

	// watch
    gulp.watch("./src/assets/source/styles/**/*.scss", ['sass']);
	gulp.watch("./src/assets/source/images/**/*", ['imagemin']);

});
