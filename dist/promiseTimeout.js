'use strict';

/* promise封装定时器 */
{
    var timeout = function timeout() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    };

    timeout(2000).then(function () {
        console.log('你真慢'); /* 2秒之后输出 */
        return timeout(2000); //再返回一个promise 
    }).then(function () {
        console.log('你更慢');
    });
}