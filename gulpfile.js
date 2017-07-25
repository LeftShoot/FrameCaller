var gulp = require('gulp-help')(require('gulp'), {
	description: '帮助信息'
});
var $ = require('gulp-load-plugins')();
var sftp = require('gulp-sftp')
var fs = require('fs')
var path = require('path')

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');


// 全局配置
var GLOBALS = gulp.GLOBALS = {
	 server: {
        ftpHost: '192.168.101.196',
        ftpUser: 'appuser',
        ftpPassword: '1qaz@WSX3edc',
        ftpPath: '/home/appuser/appfile/qy-cappluginwebfrontend/plugins'
     },
    webapp: 'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp',
	dist:'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp/plugins',
    dev: 'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp/dev'
};

gulp.task('default', '上传文件', function () {
    var server = GLOBALS.server;

    gulp.src([GLOBALS.dist + '/**',])
        .pipe(sftp({
            host: server.ftpHost,
            user: server.ftpUser,
            pass: server.ftpPassword,
            remotePath: server.ftpPath
        }));
});

gulp.task('es6', function() {
    browserify({
        entries: './app.js',
        debug: true
    }).transform(babelify)
        .on('error',gutil.log)
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(''));
});

gulp.task('watch',function() {
    gulp.watch('**/*.js',['es6'])
});