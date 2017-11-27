'use strict';

console.log('windows inner size: ' + window.innerWidth + "x" + window.innerHeight);
console.log('windows inner size: ' + window.outerWidth + "x" + window.outerHeight);

console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);

var width = window.innerWidth || document.body.clientWidth;
console.log(width);

console.log('Screen size = ' + screen.width + ' x ' + screen.height);

// if (confirm('重新加载当前页' + location.href + '?')) {
//     location.reload();
// } else {
//     location.assign('/'); // 设置一个新的URL地址
// }

console.log(document.title);

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');

var s = '提供的饮料有:';
for (var i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);

console.log(document.cookie);