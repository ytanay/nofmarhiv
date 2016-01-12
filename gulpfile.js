var gulp = require('gulp');;
var ejs = require("gulp-ejs");
var gutil = require('gulp-util');
var rename = require('gulp-rename')
var browserSync = require('browser-sync').create();
var fs = require('fs');

function get(lang){
  return JSON.parse(fs.readFileSync('./language/' + lang + '.json', 'utf-8'));
}

gulp.task('default', ['he', 'en'], function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./index.ejs", ['he', 'en']);
  gulp.watch("./language/*", ['he', 'en']);
  gulp.watch("*.html").on('change', browserSync.reload);
})

gulp.task('he', function(){
  gulp.src("./index.ejs")
    .pipe(ejs({
        RTL: true,
        DICTIONARY: get('he')
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
        DICTIONARY: get('en')
    }).on('error', gutil.log))
    .pipe(rename('index-en.html'))
    .pipe(gulp.dest('../nofmarhiv'));
})