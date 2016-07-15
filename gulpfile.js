var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var jsFiles = ['*.js', '*.html'];

gulp.task('browserify', function () {
    return browserify([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './public/main.js'
    ])
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose : true
        }))
        .pipe(jscs());
});

gulp.task('serve', ['style', 'browserify'], function () {
    var options = {
        script : 'app.js',
        delayTime : 1,
        env : {
            'PORT' : 5000
        },
        watch : jsFiles
    };
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting...'+ ev);
        });
});
