const gulp = require('gulp');
const sass  = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        online: true
    })
    gulp.watch('./css/**/*.scss', style);
    gulp.watch('./js/**/*.js', style)
    .on('change', browserSync.reload);
    gulp.watch('./*.html')
    .on('change', browserSync.reload);
    gulp.watch('./css/*.css')
    .on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;