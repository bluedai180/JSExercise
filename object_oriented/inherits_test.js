'use strict';

function Student(props) {
    this.name = props.name || 'Unnamed';
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function F() {
    
}

F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

var xiaoming = new PrimaryStudent({
   name:"xiaoming",
   grade: 2
});
console.log(xiaoming.name);
console.log(xiaoming.getGrade());

console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
console.log(xiaoming.__proto__.__proto__ === Student.prototype);

console.log(xiaoming instanceof PrimaryStudent);
console.log(xiaoming instanceof Student);


function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

`JavaScript的原型继承实现方式就是：

定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；

借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；

继续在新的构造函数的原型上定义新方法。`;