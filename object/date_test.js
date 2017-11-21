'use strict';

var d = new Date();
console.log(d.getDate());
console.log(d.getFullYear());


var today = new Date();
if (today.getMonth() === 10 && today.getDate() === 21) {
    alert('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
}
