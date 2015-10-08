var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer');

gulp.task('quickup', function () {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(rename('quickup.css'))
        .pipe(gulp.dest('./css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('quickup.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['quickup']);
