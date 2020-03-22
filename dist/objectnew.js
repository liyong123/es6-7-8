'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 对象中扩展运算符的使用 */
{
    /* 1、复制对象 要安装：npm install babel-plugin-transform-object-rest-spread -D*/
    var obj = { name: 'zhangsan', age: 20 };
    var objNew = _extends({}, obj);
    // 浅拷贝 ，指向新的内存，如果对象里面嵌套对象，
    // 新对象中的嵌套对象只是复制嵌套对象的指针，新旧嵌套对象都还是指向原先的内存,
    // 所以改变原对象的嵌套对象，新对象的嵌套对象也跟着变化

    obj.color = 'pink';
    console.log('objNew1:', objNew);
}
{
    /* 2-1、替换对象中的相同属性 */
    var _obj = { name: 'zhangsan', age: 20 };
    var _objNew = _extends({}, _obj, { name: 'lisi' });
    console.log('objNew2:', _objNew);
    /* 2-2、新增对象中的属性 */
    var obj2 = { name: 'zhangsan', age: 20 };
    var objNew2 = _extends({}, _obj, { color: 'red' });
    console.log('objNew2-2:', objNew2);
}
{
    /* 3、合并对象 */
    var _obj2 = { name: 'zhangsan', age: 20 };
    var _obj3 = { address: '南京' };
    var _objNew2 = _extends({}, _obj2, _obj3);
    console.log('objNew3:', _objNew2);
    /* 注意点：如果对象中还包含对象，复制的只是被包含对象的指针 */
}
/* 对象的简写 */
{
    var name = 'zhangsan',
        age = 20;
    var _obj4 = { //传统的写法
        name: name,
        age: age,
        say: function say() {
            console.log('say hello');
        }
        // es6写法
    };var _objNew3 = {
        name: name,
        age: age,
        say: function say() {
            console.log('say hello New');
        }
    };
    console.log('obj:', _obj4);
    console.log('objNew:', _objNew3);
    _obj4.say();
    _objNew3.say();
}
// 对象简写2
{
    var key = 'name';
    var _obj5 = {};
    _obj5[key] = 'zhangsan'; // 传统写法

    var _objNew4 = _defineProperty({}, key, 'lisi');
    console.log(_obj5, _objNew4);
}

// Object新增方法
{
    /* Object.is() 判断两个值是否全等，判断NaN时与全等 === 不同，其他与全等相同 */
    var res = Object.is(NaN, NaN);
    console.log(res, NaN === NaN); //true false

    /* Object.assign() //对象的浅拷贝 */
    var _obj6 = { name: 'zhangsan', age: 20 };
    var _objNew6 = Object.assign({}, _obj6, { color: 'red' });
    console.log('assign:', _objNew6);

    /* Object.keys(), Object.values(), Object.entries() */
    var person = {
        name: 'zhangsan',
        age: 20,
        say: function say() {
            console.log(this.name);
        }
    };
    var keys = Object.keys(person); /* 键名 */
    console.log('keys:', keys);

    var values = Object.values(person); /* 键值 */
    console.log('values:', values);

    var entries = Object.entries(person); /* 键值对 */
    console.log('entries:', entries);
}