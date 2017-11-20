var gulp = require('gulp');
var sass = require('gulp-sass');
var dest = './public/css';
var scssFiles = './public/scss/main.scss';
var sassDevOptions = {
  outputStyle: 'expanded'
}

gulp.task('default', () => {
	return gulp.src(scssFiles)
	.pipe(sass(sassDevOptions))
	.pipe(gulp.dest(dest));
});