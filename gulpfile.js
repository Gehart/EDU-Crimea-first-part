'use strict';
var gulp         = require('gulp'),                 // Подключаем Gulp
    sass         = require('gulp-sass'),            // Подключаем Sass препроцессор
    browserSync  = require('browser-sync'),         // автоматическая перезагрузка страниц и локальный сервер
    autoprefixer = require('gulp-autoprefixer'),    // автоматическая подстановка префиксов
    cssmin       = require('gulp-cssmin');

// компилирует sass/scss файлы, добавляя вендорные префиксы
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.+(sass|scss)') 
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('html')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('prebuild', async function () {

    var buildCss = gulp.src(['app/css/*.css'])
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildImg = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
    
    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'))

    var buildOwlCarousel = gulp.src('app/owl-carousel/**/*')
        .pipe(gulp.dest('dist/owl-carousel'))
});

gulp.task('default', gulp.parallel('sass','browser-sync','watch'));
gulp.task('build', gulp.parallel('prebuild'));