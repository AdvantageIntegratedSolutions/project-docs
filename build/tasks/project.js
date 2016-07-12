var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('project', function(){
	var name, i = process.argv.indexOf("--name");
	
	if(i >- 1){
    name = process.argv[i+1];
	};

	gulp.src(["./app/docs/template/**/*"], { base: './app/docs/template' })
		.pipe(replace(/\/template\//g, "/" + name + "/"))
  	.pipe(gulp.dest("./app/docs/" + name + "/"));
});