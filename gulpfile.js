var gulp = require('gulp'),
    compass = require('gulp-compass'),
	path = require('path'),
    template = require('gulp-angular-templates');

gulp.task('compass',function(){
	gulp.src('./public/sass/index.scss')
	.pipe(compass({
		project: path.join(__dirname,'./public'),
		css: 'css',
		sass: 'sass',
		image: 'image'
	}));
});

gulp.task('template', function(){
    return gulp.src('./addclass.html')
    .pipe(template({standalone: true}))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('sass:watch',function(){
	gulp.watch('./public/sass/**/*.scss',['compass']);
});
