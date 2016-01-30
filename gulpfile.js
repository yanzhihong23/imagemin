'use strict';

var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
    imageResize = require('gulp-image-resize'),
    rename = require("gulp-rename");

gulp.task('imagemin', function() {
	return gulp.src('src/images/**/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('rename', function() {
  return gulp.src('src/images/**/1.png')
    .pipe(rename({
      basename: '4'
    }))
    .pipe(imageResize({
      width: 120,
      height: 120,
      crop: true,
      upscale: true
    }))
    .pipe(gulp.dest('src/images'));
});

gulp.task('default', ['rename'], function() {
  gulp.start('imagemin');
})