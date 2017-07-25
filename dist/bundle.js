(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('../../config.js');

// 在渲染进程中.
var electron = window.electronObject; /**
                                       * Created by yiyang1990 on 2017/7/25.
                                       * 渲染进程
                                       */


document.getElementById('startUpload').onclick = function () {
  electron.shell.openExternal('https://github.com');
};

},{"../../config.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yiyang1990 on 2017/7/25.
 */
exports.default = {
    server: {
        ftpHost: '192.168.101.196',
        ftpUser: 'appuser',
        ftpPassword: '1qaz@WSX3edc',
        ftpPath: '/home/appuser/appfile/qy-cappluginwebfrontend/plugins'
    },
    webapp: 'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp',
    dist: 'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp/plugins',
    dev: 'D:/Sinopec/cap.plugin.dream/cap.plugin.dream.web/cap.plugin.dream.web.frontend/src/main/webapp/dev'
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJicm93c2VyXFxqc1xcYXBwMi5qcyIsImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDSUE7O0FBQ0E7QUFDQSxJQUFNLFdBQVcsT0FBTyxjQUF4QixDLENBTkE7Ozs7OztBQVFBLFNBQVMsY0FBVCxDQUF3QixhQUF4QixFQUF1QyxPQUF2QyxHQUFpRCxZQUFZO0FBQ3pELFdBQVMsS0FBVCxDQUFlLFlBQWYsQ0FBNEIsb0JBQTVCO0FBQ0gsQ0FGRDs7Ozs7Ozs7QUNSQTs7O2tCQUdlO0FBQ1gsWUFBUTtBQUNKLGlCQUFTLGlCQURMO0FBRUosaUJBQVMsU0FGTDtBQUdKLHFCQUFhLGNBSFQ7QUFJSixpQkFBUztBQUpMLEtBREc7QUFPWCxZQUFRLGdHQVBHO0FBUVgsVUFBSyx3R0FSTTtBQVNYLFNBQUs7QUFUTSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHlpeWFuZzE5OTAgb24gMjAxNy83LzI1LlxyXG4gKiDmuLLmn5Pov5vnqItcclxuICovXHJcbmltcG9ydCAnLi4vLi4vY29uZmlnLmpzJ1xyXG4vLyDlnKjmuLLmn5Pov5vnqIvkuK0uXHJcbmNvbnN0IGVsZWN0cm9uID0gd2luZG93LmVsZWN0cm9uT2JqZWN0O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0VXBsb2FkJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGVsZWN0cm9uLnNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeWl5YW5nMTk5MCBvbiAyMDE3LzcvMjUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBmdHBIb3N0OiAnMTkyLjE2OC4xMDEuMTk2JyxcclxuICAgICAgICBmdHBVc2VyOiAnYXBwdXNlcicsXHJcbiAgICAgICAgZnRwUGFzc3dvcmQ6ICcxcWF6QFdTWDNlZGMnLFxyXG4gICAgICAgIGZ0cFBhdGg6ICcvaG9tZS9hcHB1c2VyL2FwcGZpbGUvcXktY2FwcGx1Z2lud2ViZnJvbnRlbmQvcGx1Z2lucydcclxuICAgIH0sXHJcbiAgICB3ZWJhcHA6ICdEOi9TaW5vcGVjL2NhcC5wbHVnaW4uZHJlYW0vY2FwLnBsdWdpbi5kcmVhbS53ZWIvY2FwLnBsdWdpbi5kcmVhbS53ZWIuZnJvbnRlbmQvc3JjL21haW4vd2ViYXBwJyxcclxuICAgIGRpc3Q6J0Q6L1Npbm9wZWMvY2FwLnBsdWdpbi5kcmVhbS9jYXAucGx1Z2luLmRyZWFtLndlYi9jYXAucGx1Z2luLmRyZWFtLndlYi5mcm9udGVuZC9zcmMvbWFpbi93ZWJhcHAvcGx1Z2lucycsXHJcbiAgICBkZXY6ICdEOi9TaW5vcGVjL2NhcC5wbHVnaW4uZHJlYW0vY2FwLnBsdWdpbi5kcmVhbS53ZWIvY2FwLnBsdWdpbi5kcmVhbS53ZWIuZnJvbnRlbmQvc3JjL21haW4vd2ViYXBwL2RldidcclxufSJdfQ==
