var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

/* https://babeljs.io/learn-es2015/ */
gulp.task("default", function () {
  return gulp.src(["src/client/es6/**/*.js"], {base: 'src/client/es6/'})
    .pipe(babel())
    .pipe(rename({suffix: ".build", extname: ".js"}))
    .pipe(gulp.dest("src/client/scripts/"));
});