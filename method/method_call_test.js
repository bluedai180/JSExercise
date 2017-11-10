'use strict';

// rest 参数，ES6
// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
//
// foo(1, 2, 3, 4, 5);

`用rest参数编写一个sum()函数，接收任意个参数并返回它们的和`;
// function sum(...rest) {
//     var len = rest.length;
//     if (len === 0) {
//         return 0;
//     }
//     var result = 0;
//     for (var i = 0; i < len; i++) {
//         result = rest[i] + result;
//     }
//     return result;
// }
//
// var i;
// var args = [];
// for (i = 1; i <= 100; i++) {
//     args.push(i);
// }
// if (sum() !== 0) {
//     alert('测试失败: sum() = ' + sum());
// } else if (sum(1) !== 1) {
//     alert('测试失败: sum(1) = ' + sum(1));
// } else if (sum(2, 3) !== 5) {
//     alert('测试失败: sum(2, 3) = ' + sum(2, 3));
// } else if (sum.apply(null, args) !== 5050) {
//     alert('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
// } else {
//     alert('测试通过!');
// }

`定义一个计算圆面积的函数area_of_circle()，它有两个参数：
•r: 表示圆的半径；
•pi: 表示π的值，如果不传，则默认3.14`;

function area_of_circle(r, pi) {
    if (pi !== undefined) {
        return pi * r * r;
    }
    return 3.14 * r * r;
}
// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    alert('测试通过');
} else {
    alert('测试失败');
}