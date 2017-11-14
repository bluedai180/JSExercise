'use strict';

`利用reduce()求积`;
var arr = [1, 3, 5, 7, 9];
function multiplication(x, y) {
    return x * y;
}

console.log(arr.reduce(multiplication));

`把字符串转换为Number的函数`;
// var str = "";
// function string2int(s) {
//
//     var temp = s.split("").map(function (x) {
//         return x.charCodeAt() - 48;
//     });
//     return temp.reduce(function (x, y) {
//         return x*10 + y;
//     });
// }
// // 测试:
// if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
//     if (string2int.toString().indexOf('parseInt') !== -1) {
//         alert('请勿使用parseInt()!');
//     } else if (string2int.toString().indexOf('Number') !== -1) {
//         alert('请勿使用Number()!');
//     } else {
//         alert('测试通过!');
//     }
// }
// else {
//     alert('测试失败!');
// }

`首字母大写，其他小写的规范名字`;
// function normalize(arr) {
//     return arr.map(function (x) {
//         return x[0].toUpperCase() + x.toLowerCase().substring(1);
//     });
// }
// // 测试:
// if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
//     alert('测试通过!');
// }
// else {
//     alert('测试失败!');
// }