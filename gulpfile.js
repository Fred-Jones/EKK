//Gulp is not my favorite library
//I think it is pretty whack overall, but I
//l like the cli.
//For this reason I am returning promises, it just eliminates
///the need to require modules that do what can be done much more easily
//with plain javascript.
var q = require('Promise')

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload');


gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee jade',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('localblizz', function() {
  __localblizz.then(function(data) {
    __log(data)
  })
})

gulp.task('checkgit', function() {
  __checkgit().then(function(data) {
    __log('checkgitz')
  })

})

gulp.task('default', [
  'develop',
  'checkgit',
  'checklocalblizz'
]);

//hack fxns//
function __log(str) {
  process.stdout.write(str)
  return
}
function __checkgit() {
  var v = new Promise(function(resolve, reject) {
    resolve('test')
  })
  return v

}

function __localblizz() {
  var v = new Promise(function(resolve, reject) {
    resolve()
  })
  return v

}

function __eachFile() {
  var eachFile =[]
  
  return eachFile

}
