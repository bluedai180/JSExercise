'use strict';

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};

// var upper = _.map(obj, function (value, key) {
//     return value.toUpperCase();
// });
//
// console.log(JSON.stringify(upper));

var r1 = _.every(obj, function (value, key) {
    return value.match(/[a-z]/g);
});
// var r2 = _.some(obj, function (value, key) {
//     return ???;
// });
console.log(r1);