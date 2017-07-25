/**
 * Created by yiyang1990 on 2017/7/25.
 * 渲染进程
 */
import '../../config.js'
// 在渲染进程中.
const electron = window.electronObject;

document.getElementById('startUpload').onclick = function () {
    electron.shell.openExternal('https://github.com');
}
