/**
 * Created by yiyang1990 on 2017/7/25.
 */
import '../config.js'
// 在渲染进程中.
const electron = require('fs');

document.getElementById('startUpload').onclick = function () {
    console.log('123');
    electron.shell.openExternal('https://github.com');
}
