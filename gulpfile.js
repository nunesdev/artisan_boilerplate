var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');
    server = require('live-server');




// Scripts
gulp.task('scripts', function(){
    gulp.src('resources/js/main.js')
    .pipe(plumber())
    //.pipe(uglify())  //DESCOMENTE PARA QUE O JS SEJA MINIFICADO
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
    port: 8181, // Escolha a porta que deseja usar.
    host: "0.0.0.0", // Escolha o IP que deseja Usar.
    // root: "/artisan-boilerplate", Descomente para usar um root diferente.
    open: false, // true ou false para iniciar automaticamente no browser.
    ignore: 'scss,my/templates', // separe com , os caminhos a serem ignorados
    file: "index.html", // Quando setado essa pagina será seu 404.
    wait: 1000, // Aguarde para atualizar
    mount: [['/components', './node_modules']], // monte um directorio para raiz.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Um array de conexoes compativeis.
};


 server.start(params); 

});




//Watch Task
gulp.task('watch', function(){

    gulp.watch('resources/js/*.js', ['scripts']),
    gulp.watch('resources/css/**/*.scss', ['styles']);

});

gulp.task('default', ['scripts', 'styles', 'html', 'watch']);
