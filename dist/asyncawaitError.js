'use strict';

{
    /* async相当于new Promise的语法糖，所以和Promise一样可以捕获错误 */
    var fn1 = async function fn1() {
        /* user未定义 */
        return user;
    };

    fn1().then(function (v) {
        console.log(v);
    }).catch(function (error) {
        /* 捕获错误 */
        console.log(error.message);
    });
}

{
    /* await错误处理 */
    var _fn = async function _fn() {
        try {
            var _user = await ajax('localhost:8080');
            console.log('不会输出'); // 此处报错，不会输出
            return _user;
        } catch (error) {
            console.log(error.message);
        }
        console.log('会输出');
    };

    _fn();
}

{
    /* await错误处理 */
    var _fn2 = async function _fn2() {
        try {
            var _user2 = await new Promise(function (resolve) {
                setTimeout(function (_) {
                    resolve('没有错误'); /* resolve执行，值通过await赋值给user */
                }, 1000);
            });
            return _user2;
        } catch (error) {
            console.log(error.message);
        }
    };

    _fn2().then(function (v) {
        console.log(v);
    });
}