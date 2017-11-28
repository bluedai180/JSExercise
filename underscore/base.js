'use strict';

console.log(_.map([1, 2, 3, 4], (x) => x * x));
console.log(_.map({a: 1, b: 2, c: 3}, (v, k) => k + '=' + v));