var gulp = require('gulp');
 
var paths = {
  scripts: [
    'assets/*.js'
    ],
  sass: 'assets/*.css'
};

gulp.task('rerun_script', function() {});
gulp.task('rerun_CSS', function() {});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['rerun_script']);
  gulp.watch(paths.sass, ['rerun_CSS']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch']);