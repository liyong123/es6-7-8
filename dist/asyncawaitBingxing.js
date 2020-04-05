'use strict';

{
    /* await并行执行技巧 */
    var fn1 = function fn1() {
        return new Promise(function (resolve) {
            setTimeout(function (_) {
                resolve('第一');
            }, 2000);
        });
    };

    var fn2 = function fn2() {
        return new Promise(function (resolve) {
            setTimeout(function (_) {
                resolve('第二');
            }, 2000);
        });
    };

    var fnResult = async function fnResult() {
        /* fn1, fn2 并行 */
        var res1 = fn1();
        var res2 = fn2();
        var res1Data = await res1;
        var res2Data = await res2;
        console.log(res1Data, res2Data);
    };

    var fnResult2 = async function fnResult2() {
        /* fn1, fn2 并行 */
        var res = await Promise.all([fn1(), fn2()]);
        return res;
    };

    fnResult();

    fnResult2().then(function (v) {
        console.log(v);
    });
}