'use strict';

var r1, r2, s = null;
var num = '1';
try {
    if (isNaN(num)) {
        throw new TypeError('wrong num type');
    }
    r1 = s.length;
    r2 = 100;
} catch (e) {
    if (e instanceof TypeError) {
        alert("TypeError!");
    }
    console.log(e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1);
console.log('r2 = ' + r2);