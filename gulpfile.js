const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', () => {
    return gulp.src('app/styles/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/styles/css'))
        .pipe(browserSync.stream())
});

gulp.task('browser-sync', (cb) => {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })

    cb()
});

gulp.task('watch', (cb) => {
    gulp.watch('app/styles/sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('app/*.html').on('change', browserSync.reload)
    cb()
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'))