'use strict';

var arr = [10, 20, 1, 2];
// sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]
