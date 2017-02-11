var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');
    server = require('live-server');




// Scripts
gulp.task('scripts', function(){
    gulp.src('resources/js/main.js')
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

//styles
gulp.task('styles', function(){
    gulp.src('resources/css/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));

});

gulp.task('html', function(){
   
  var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    // root: "/artisan-boilerplate", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};


 server.start(params); 

});




//Watch Task
gulp.task('watch', function(){

    gulp.watch('resources/js/*.js', ['scripts']),
    gulp.watch('resources/css/**/*.scss', ['styles']);

});

gulp.task('default', ['scripts', 'styles', 'html', 'watch']);
