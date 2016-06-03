var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var sass = require('gulp-sass');

var paths = {
  scripts: ['assets/js/**/*.js'],
  images: 'assets/img/**/*',
  scss : ['assets/scss/**/*.scss']
};


gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});


gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(gulp.dest('public/js'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.scss, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts','sass']);