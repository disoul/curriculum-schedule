var gulp = require('gulp'),
    compass = require('gulp-compass'),
	path = require('path');

gulp.task('compass',function(){
	gulp.src('./public/sass/index.scss')
	.pipe(compass({
		project: path.join(__dirname,'./public'),
		css: 'css',
		sass: 'sass',
		image: 'image'
	}));
});

gulp.task('sass:watch',function(){
	gulp.watch('./public/sass/**/*.scss',['compass']);
});

gulp.task('default', function() {
	['sass:watch']
});

