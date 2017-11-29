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
    return value.toLowerCase() === value;
});
var r2 = _.some(obj, function (value, key) {
    return value.toLowerCase() === value;
});
console.log('every key-value are lowercase: ' + r1 + '\nsome key-value are lowercase: ' + r2);

var m = _.max({ a: 1, b: 2, c: 3 });
console.log(m);



var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
console.log(groups);

var a = [1, 2, 3, 4, 5, 6];
console.log(_.shuffle(a));
console.log(_.sample(a));
