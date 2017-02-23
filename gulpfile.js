const gulp = require('gulp');
const sass=require('gulp-sass');
const px2rem = require('gulp-px3rem');
const rename = require('gulp-rename');


gulp.task('sass',function(){
	gulp.src('sass/*.{sass,scss}')
  	.pipe(sass())
  	.pipe(px2rem({
			remUnit: 40,
			remPrecision: 6
		}))
		.pipe(rename(function(path) {
			var s = path.basename.replace('.debug', '');

			path.basename = s;
		}))
  	.pipe(gulp.dest('css'))


});

gulp.task('watch', function() {
	gulp.watch('sass/*.{sass,scss}', ['sass']);
});

gulp.task('default', ['watch', 'sass']);