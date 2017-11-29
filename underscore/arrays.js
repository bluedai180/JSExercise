'use strict';

var arr = [2, 4, 6, 8];
console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.flatten([1, [2], [3, [[4], [5]]]]));

var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
console.log(_.zip(names, scores));

console.log(_.unzip([['Adam', 85], ['Lisa', 92], ['Bart', 59]]));


var user = ['Adam', 'Lisa', 'Bart'];
var age = [15, 12, 19];
console.log(_.object(user, age));


console.log(_.range(0, 10));


var arr = ['Apple', 'orange', 'banana', 'ORANGE', 'apple', 'PEAR'];
var result = _.uniq(arr, false, function (x) {
    return x.toUpperCase();
});

// 测试
if (result.toString() === ["Apple", "orange", "banana", "PEAR"].toString()) {
    console.log('测试成功!');
} else {
    console.log('测试失败!');
}