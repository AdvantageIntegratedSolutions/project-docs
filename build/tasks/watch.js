var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var notify = require('gulp-notify');
var historyApiFallback = require('connect-history-api-fallback');

var paths = require('../paths');

var htmlTasks = [ 'html', browserSync.reload ];
var templateTasks = [ 'templates', 'js', 'html', browserSync.reload ];
var jsTasks = [ 'html', 'js', browserSync.reload ];
var cssTasks = [ 'css', browserSync.reload ];

function interceptErrors(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('watch', ['local']);

gulp.task('local', ['html', 'templates', 'css', 'js'], function() {
  browserSync.init({
    open: true,
    notify: false,
    server: paths.output,
    middleware: [ historyApiFallback() ]
  });

  gulp.watch(paths.html, htmlTasks);
  gulp.watch(paths.templates, templateTasks);
  gulp.watch(paths.javascript, jsTasks);
  gulp.watch(paths.css, cssTasks);
});