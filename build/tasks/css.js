var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var insert = require('gulp-insert');

var paths = require('../paths');

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(paths.output));
});