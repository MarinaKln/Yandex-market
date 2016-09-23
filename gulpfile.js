var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

// server connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//html
gulp.task('html', function() {
    gulp.src('index.html')
    .pipe(connect.reload());
});

// sass
gulp.task('sass', function() {
    gulp.src('style/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/css'))
        .pipe(connect.reload());
});

// css
gulp.task('css', function () {
    return gulp.src('style/css/style.css')
        .pipe(cleanCSS(''))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/css'))
        .pipe(connect.reload());
});

//build
gulp.task('build', function () {
    return browserify({entries: 'scripts/main.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

// watch
gulp.task("watch", function() {
    gulp.watch("style/*.scss", ["sass"]);
    gulp.watch('scripts/*.jsx', ['build']);
    gulp.watch("scripts/main.jsx", ["html"]);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch' ]);
