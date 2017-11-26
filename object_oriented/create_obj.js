'use strict';

function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello ' + this.name)
    }
}

var xiaoming = new Student("xiaoming");
xiaoming.hello();
var xiaojun = new Student("xiaojun");
xiaojun.hello();
console.log(xiaoming.hello === xiaojun.hello);

Student.prototype.bye = function () {
    console.log("Bye " + this.name);
};

xiaoming.bye();
xiaojun.bye();
console.log(xiaoming.bye === xiaojun.bye);


`一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传`;
function Teacher(props) {
    this.name = props.name || "匿名";
    this.age = props.age || 24;
}

function createTeacher(props) {
    return new Teacher(props || {})
}

var wang = createTeacher({
   name: "王"
});
console.log(wang.age);




function Cat(name) {
    this.name = name;
}
Cat.prototype.say = function () {
    return "Hello, " + this.name + "!";
};

// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}