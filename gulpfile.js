var gulp       		= require('gulp');
var uglify     		= require('gulp-uglify');
var minifyCSS  		= require('gulp-minify-css');
var concat     		= require('gulp-concat');
var notify     		= require('gulp-notify');

gulp.task('mini-js', function () {
   return gulp.src([
      'js/application.js',
      'js/classes.js',
      'js/template.js'
   ])
   .pipe(uglify())
   .pipe(concat('app.js'))
   .pipe(gulp.dest('build'))
   .pipe(notify({message:'app.js erstellt'}));
});

gulp.task('mini-css', function () {
   gulp.src([
      'css/template.css'
   ])
   .pipe(minifyCSS())
   .pipe(concat('style.css'))
   .pipe(gulp.dest('build'))
   .pipe(notify({message:'style.css erstellt'}));
});