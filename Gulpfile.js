"use strict"

var gulp = require("gulp");
var sass = require("gulp-sass");
var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;

//Compiles all gulp tasks
gulp.task('default', ['sass']);

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("src/scss/**/*.scss")
      .pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.reload({
        stream: true
      }))
});
