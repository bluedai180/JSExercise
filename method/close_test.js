'use strict';

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
//原因就在于返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());



function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());
console.log(f2());
console.log(f3());


function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3

var c2 = create_counter(10);
console.log(c2.inc()); // 11
console.log(c2.inc()); // 12
console.log(c2.inc()); // 13


function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}
// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343