"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uncss = require('gulp-uncss');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const del = require('del');
const cssFiles = [
  './src/css/base/base.css',
  './src/css/layout/header-top.css',
  './src/css/layout/main-screen.css',
  './src/css/components/about-us.css',
  './src/css/components/blog.css',
  './src/css/components/counters.css',
  './src/css/components/design.css',
  './src/css/components/open-map.css',
  './src/css/components/our-team.css',
  './src/css/components/open-map.css',
  './src/css/components/our-work.css',
  './src/css/components/our-work-slider.css',
  './src/css/components/people-say.css',
  './src/css/components/regalia.css',
  './src/css/components/services.css',
  './src/css/components/testimonials-slider.css',
  './src/css/components/we-do.css',
  './src/css/components/test.css',
  './src/css/layout/footer.css'
]

function styles() {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(uncss({
      html: ['index.html', 'posts/**/*.html', 'http://example.com']
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function clean() {
  return del(['build/*'])
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./src/css/**/*.css', styles)
  gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles)));
gulp.task('dev', gulp.series('build', 'watch'));
