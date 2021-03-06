'use strict';

`JavaScript的函数在查找变量时从自身函数定义开始，
从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，
则内部函数的变量将“屏蔽”外部函数的变量。`;
// function foo() {
//     var x = 1;
//     function bar() {
//         var x = 'A';
//         alert('x in bar() = ' + x); // 'A'
//     }
//     alert('x in foo() = ' + x); // 1
//     bar();
// }
//
// foo();


`JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。`;
function foo() {
    var x = 'Hello, ' + y;
    alert(x);
    var y = 'Bob';
}

foo();