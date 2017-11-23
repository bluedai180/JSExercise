'use strict';

var re = /^\d{3}-\d{3,8}$/;
console.log(re.test('010-12345'));
console.log(re.test('010 - 12345'));

var a = 'a b   c';
console.log(a.split(/\s+/));
var b = 'a,b, c  d';
console.log(b.split(/[\s,]+/));
var c = 'a,b;; c  d';
console.log(c.split(/[\s,;]+/));

var re_group = /^(\d{3})-(\d{3,8})$/;
console.log(re_group.exec('010-12345'));
console.log(re_group.exec('1011234'));

var re_tan = /^(\d+?)(0*)$/;
console.log(re_tan.exec('1023000'));

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re_all = /[a-zA-Z]+Script/g;
console.log(re_all.exec(s));
console.log(re_all.lastIndex);
console.log(re_all.exec(s));
console.log(re_all.lastIndex);
console.log(re_all.exec(s));
console.log(re_all.lastIndex);
console.log(re_all.exec(s));
console.log(re_all.lastIndex);
// 返回null
console.log(re_all.exec(s));
console.log(re_all.lastIndex);

var re_email = /^[a-zA-Z.0-9]+@[0-9a-z]+\.(com|org)$/;
// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re_email.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re_email.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}


var re_mail_name = /^<(\w+\s+\w+)>\s+(\w+@\w+?.\w+)$/;
// 测试:
var r = re_mail_name.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!' + r);
}
else {
    console.log('测试成功!');
}

var s_test = 'dAiEq145weolc2Qp4';
var re_s = /\d+/g;
console.log(s_test.match(re_s).join(""));