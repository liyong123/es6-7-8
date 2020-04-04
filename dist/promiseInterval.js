'use strict';

{
    var interval = function interval() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        var callback = arguments[1];

        return new Promise(function (resolve) {
            var id = setInterval(function () {
                callback(id, resolve); // 回调函数
            }, delay);
        });
    };

    interval(100, function (id, resolve) {
        var div = document.querySelector('div');
        var left = parseInt(window.getComputedStyle(div).left);
        div.style.left = left + 10 + 'px';
        if (left >= 200) {
            clearInterval(id);
            resolve(div);
        }
    }).then(function (div) {
        return interval(100, function (id, resolve) {
            var width = parseInt(window.getComputedStyle(div).width);
            div.style.width = width - 10 + 'px';
            if (width <= 20) {
                clearInterval(id);
                resolve(div);
            }
        });
    }).then(function (div) {
        div.style.backgroundColor = 'red';
    });
}