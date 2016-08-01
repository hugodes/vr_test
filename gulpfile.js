var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./node_modules/aframe/dist/aframe-v0.2.0.js')
   .pipe(gulp.dest('./public/javascripts/assets'));
});