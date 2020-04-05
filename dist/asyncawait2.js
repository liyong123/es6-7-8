'use strict';

{
    var fn1 = async function fn1() {
        return '你好';
    };
    /* async相当于new Promise的语法糖，
    此时的fn1也是一个Promise的实例,状态为resolved, 从未触发then方法 */


    console.log(fn1());

    fn1().then(function (v) {
        console.log(v);
    });
}
{
    var _fn = async function _fn() {
        /* 返回一个Promise,也和上面一样的逻辑 */
        return new Promise(function (resolve) {
            console.log('你很帅');
            resolve('真的吗？');
        });
    };

    _fn().then(function (v) {
        console.log(v);
    });
}
{
    /* await 避免的then的层层回调 ，await就是then的语法糖*/
    var _fn2 = async function _fn2() {
        var name = await new Promise(function (resolve) {
            console.log('name');
            setTimeout(function () {
                /*await等待resolve()执行，取到resolve中的值，所以await相当于then(), 
                从而将得到的值赋给了name */
                resolve('zhangsan');
            }, 2000);
        });
        /* 此await 等待上一个await执行完再执行，多个独立的await避免了 then的层层回调 */
        var address = await new Promise(function (resolve) {
            console.log('address'); //此行的输出也是要等待上面的2秒过后再输出
            setTimeout(function () {
                resolve(name + ' nanjing');
            }, 2000);
        });

        console.log(address);
    };

    _fn2();
}

{
    /* sleep 返回一个Promise实例 */
    var sleep = async function sleep() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;

        return new Promise(function (resolve) {
            setTimeout(function (_) {
                resolve();
            }, delay);
        });
    };

    var show = async function show() {
        var _arr = ['zhangsan', 'lisi'];

        for (var _i = 0; _i < _arr.length; _i++) {
            var user = _arr[_i];
            await sleep(); /* await延时函数 */
            console.log(user); // 等sleep两秒后执行，再输出
        }
    };

    show();
}