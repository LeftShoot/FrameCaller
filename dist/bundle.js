(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./config.js');

// 在渲染进程中.
var electron = require('fs'); /**
                               * Created by yiyang1990 on 2017/7/25.
                               */


document.getElementById('startUpload').onclick = function () {
  console.log('123');
  electron.shell.openExternal('https://github.com');
};

},{"./config.js":2,"fs":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAyLmpzIiwiY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBOztBQUNBO0FBQ0EsSUFBTSxXQUFXLFFBQVEsSUFBUixDQUFqQixDLENBTEE7Ozs7O0FBT0EsU0FBUyxjQUFULENBQXdCLGFBQXhCLEVBQXVDLE9BQXZDLEdBQWlELFlBQVk7QUFDekQsVUFBUSxHQUFSLENBQVksS0FBWjtBQUNBLFdBQVMsS0FBVCxDQUFlLFlBQWYsQ0FBNEIsb0JBQTVCO0FBQ0gsQ0FIRDs7Ozs7Ozs7QUNQQTs7O2tCQUdlO0FBQ1gsWUFBUTtBQUNKLGlCQUFTLGlCQURMO0FBRUosaUJBQVMsU0FGTDtBQUdKLHFCQUFhLGNBSFQ7QUFJSixpQkFBUztBQUpMLEtBREc7QUFPWCxZQUFRLGdHQVBHO0FBUVgsVUFBSyx3R0FSTTtBQVNYLFNBQUs7QUFUTSxDOzs7QUNIZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSB5aXlhbmcxOTkwIG9uIDIwMTcvNy8yNS5cclxuICovXHJcbmltcG9ydCAnLi9jb25maWcuanMnXHJcbi8vIOWcqOa4suafk+i/m+eoi+S4rS5cclxuY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdmcycpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0VXBsb2FkJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCcxMjMnKTtcclxuICAgIGVsZWN0cm9uLnNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tJyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeWl5YW5nMTk5MCBvbiAyMDE3LzcvMjUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBmdHBIb3N0OiAnMTkyLjE2OC4xMDEuMTk2JyxcclxuICAgICAgICBmdHBVc2VyOiAnYXBwdXNlcicsXHJcbiAgICAgICAgZnRwUGFzc3dvcmQ6ICcxcWF6QFdTWDNlZGMnLFxyXG4gICAgICAgIGZ0cFBhdGg6ICcvaG9tZS9hcHB1c2VyL2FwcGZpbGUvcXktY2FwcGx1Z2lud2ViZnJvbnRlbmQvcGx1Z2lucydcclxuICAgIH0sXHJcbiAgICB3ZWJhcHA6ICdEOi9TaW5vcGVjL2NhcC5wbHVnaW4uZHJlYW0vY2FwLnBsdWdpbi5kcmVhbS53ZWIvY2FwLnBsdWdpbi5kcmVhbS53ZWIuZnJvbnRlbmQvc3JjL21haW4vd2ViYXBwJyxcclxuICAgIGRpc3Q6J0Q6L1Npbm9wZWMvY2FwLnBsdWdpbi5kcmVhbS9jYXAucGx1Z2luLmRyZWFtLndlYi9jYXAucGx1Z2luLmRyZWFtLndlYi5mcm9udGVuZC9zcmMvbWFpbi93ZWJhcHAvcGx1Z2lucycsXHJcbiAgICBkZXY6ICdEOi9TaW5vcGVjL2NhcC5wbHVnaW4uZHJlYW0vY2FwLnBsdWdpbi5kcmVhbS53ZWIvY2FwLnBsdWdpbi5kcmVhbS53ZWIuZnJvbnRlbmQvc3JjL21haW4vd2ViYXBwL2RldidcclxufSIsIiJdfQ==
