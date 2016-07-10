var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var tasks = [ 'html', 'templates', 'js', 'css' ];
 
gulp.task('deploy', tasks, function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});