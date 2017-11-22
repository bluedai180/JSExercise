'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

// var s = JSON.stringify(xiaoming);
// 按照缩进输出
// var s = JSON.stringify(xiaoming, null, '  ');
// var s = JSON.stringify(xiaoming, ['name', 'skills'], '  ');

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
// 预处理方法，输出的字符串都大写
// var s = JSON.stringify(xiaoming, convert, '  ');
// console.log(s);

// 重写toJSON方法直接返回JSON应该序列化的数据
// var xiaohong = {
//     name: '小红',
//     age: 15,
//     gender: true,
//     height: 1.65,
//     grade: null,
//     'middle-school': '\"W3C\" Middle School',
//     skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
//     toJSON: function () {
//         return {
//             'Name':this.name,
//             'Age':this.age
//         }
//     }
// };
//
// var s = JSON.stringify(xiaohong);
// console.log(s);

console.log(JSON.parse('{"name":"小明","age":14}'));

// 还可以接收一个函数，用来转换解析出的属性
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj));

var url = "https://free-api.heweather.com/v5/weather?city=beijing&key=a5d11204de6b4869a9a8a107f9f4390c";

$.getBoundingClientRect(url);
