'use strict';

`对象的方法在外部调用赋值时, this也需要指明`;
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };
//
// var fn = xiaoming.age;
// fn();

`内部函数this也找不到`;
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return getAgeFromBirth();
//     }
// };
//
// xiaoming.age();

`可以使用apply方法在外部调用，传入对象和参数列表`;
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());
console.log(getAge.apply(xiaoming, []));


`装饰器`;
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log(count);