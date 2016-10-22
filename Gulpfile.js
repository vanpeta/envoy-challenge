"use strict"

var gulp = require('gulp');
var sass = require("gulp-sass");

//Compiles all gulp tasks
gulp.task('default', ['sass']);

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("src/scss/**/*.scss")
      .pipe(gulp.dest("dist/css"))
});
