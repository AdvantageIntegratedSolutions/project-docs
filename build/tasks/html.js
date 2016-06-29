var gulp = require('gulp');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');

var paths = require('../paths');

gulp.task('html', ['js', 'css'], function() {
  return gulp.src(paths.html)
    .pipe(rename(function (path) {
      path.basename = "index";
      path.dirname = "";
    }))
    .pipe(gulp.dest(paths.output));
});

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(templateCache("templates.js", {
      module: "templates",
      standalone: true
    }))
    .pipe(gulp.dest(paths.output));
});