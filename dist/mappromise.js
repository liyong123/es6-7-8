'use strict';

{
    /* map 实现promise队列 */
    var queue = function queue(num) {
        var promise = Promise.resolve();
        num.map(function (v) {
            /* 上一次promise执行完，才执行下一次啊 */
            promise = promise.then(function (_) {
                /* 返回的Promise实例再赋值给promise，然后依次执行promise队列 */
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log(v);
                        /* 执行resolve(), 触发then() */
                        resolve();
                    }, 1000);
                });
            });
        });
    };

    var num = [1, 2, 3, 4, 5];
    queue(num);
}

{
    /* 实际应用 */
    var _queue = function _queue(num) {
        var promise = Promise.resolve();
        num.map(function (v) {
            /* 上一次promise执行完，才执行下一次啊 */
            promise = promise.then(function (_) {
                /* 返回的Promise实例再赋值给promise，然后依次执行promise队列 */
                return v();
            });
        });
    };

    var asyncFun1 = function asyncFun1() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log('asyncFun1');
                resolve();
            }, 6000);
        });
    };

    var asyncFun2 = function asyncFun2() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log('asyncFun2');
                resolve();
            }, 1000);
        });
    };

    _queue([asyncFun1, asyncFun2]);
}