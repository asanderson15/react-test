/**
 * Created by aanderson on 3/1/15.
 */

var gulp = require('gulp');
var react = require('gulp-react');
var ts = require('gulp-typescript');
var merge = require('merge2');
var watch = require('gulp-watch');

gulp.task('bower', function() {
   return gulp.src('./bower_components/**/*')
       .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('jsx', function() {
    return gulp.src('assets/*.js')
        .pipe(watch('assets/*.js'))
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('ts', function() {
    var tsResult = gulp.src('assets/*.ts')
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))]
    );
});

gulp.task('html', function() {
   return gulp.src('assets/*.html')
       .pipe(watch('assets/*.html'))
       .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsx', 'ts', 'html', 'bower'], function() {
    // Any other tasks
});

