var gulp = require('gulp');
 
var paths = {
  scripts: [
    'assets/*.js'
    ],
  sass: 'css/*.scss'
};
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['rerunScript']);
  gulp.watch(paths.sass, ['compileSass']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch']);