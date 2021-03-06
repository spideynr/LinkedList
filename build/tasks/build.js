var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babel = require('babelify');
var notify = require("gulp-notify");
var paths = require('../paths');

gulp.task('build', function () {
	return browserify({entries: 'src/index.js', debug: true})
	.transform(babel)
	.bundle()
	.on('error', notify.onError("Error: <%= error.message %>"))
	.pipe(source('linkedList.js'))
	.pipe(gulp.dest(paths.output));
});
