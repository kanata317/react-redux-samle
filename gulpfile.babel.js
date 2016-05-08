'use strict';

require('babel-register');
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

gulp.task('build', () => {
  browserify('./src/index.js', {
    debug: true
  })
    .transform(babelify)
    .bundle()
    .on('error', error => {
      console.log('Error:' + error.message);
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', () => {
  browserSync.init(null, {
    server: './dist',
    reloadDelay: 2000
  });
})

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ['build', 'browser-sync', 'watch']);
