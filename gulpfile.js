var gulp = require('gulp');;
var ejs = require("gulp-ejs");
var gutil = require('gulp-util');
var rename = require('gulp-rename')
var browserSync = require('browser-sync').create();

var EN = require('./language/en');
var HE = require('./language/he');

gulp.task('default', ['he', 'en'], function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./index.ejs", ['he', 'en']);
  gulp.watch("*.html").on('change', browserSync.reload);
})

gulp.task('he', function(){
  gulp.src("./index.ejs")
    .pipe(ejs({
        RTL: true,
        DICTIONARY: HE
    }).on('error', gutil.log))
    .pipe(gulp.dest('../nofmarhiv'));


  /*gulp.src("./index.ejs")
    .pipe(ejs({
        RTL: false,
        DICTIONARY: EN
    }).on('error', gutil.log))
    .pipe(gulp.dest('../nofmarhiv/index-en.html'));*/
})


gulp.task('en', function(){
  gulp.src("./index.ejs")
    .pipe(ejs({
        RTL: false,
        DICTIONARY: EN
    }).on('error', gutil.log))
    .pipe(rename('index-en.html'))
    .pipe(gulp.dest('../nofmarhiv'));
})