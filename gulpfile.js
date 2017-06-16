'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
 
var paths = {
  scripts: 'build/js/*.js',
  sass: 'build/sass/*.scss'
};

gulp.task('rerun_script', function() {});

gulp.task('runBabel', () => {
  return gulp.src(paths.scripts)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('assets/js'));
})

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});
 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['rerun_script']);
  gulp.watch(paths.sass, ['sass']);
});
 
gulp.task('default', ['runBabel', 'sass', 'watch']);