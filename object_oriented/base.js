'use strict';

var Student = {
    name : "robot",
    height : 1.2,
    run : function () {
        console.log(this.name + " running")
    }
};

var xiaoming = {
    name:"xiaoming"
};

// 不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__。
xiaoming.__proto__ = Student;
console.log(xiaoming.run());

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaohong = createStudent("xiaohong");
xiaohong.run();
