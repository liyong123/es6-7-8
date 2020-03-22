'use strict';

var fs = require('fs');
var promisify = require('util').promisify; /* node8 中的方法 */

{
    /* 1、基于回调做异步处理，读取完文件，回调处理 */
    fs.readFile('./test.txt', function (error, data) {
        console.log("data:", data.toString());
    });
}

{
    /* 2、es6的Promise() 本质：链式回调 */
    var readFileFun = function readFileFun(path) {
        return new Promise(function (resovle, reject) {
            fs.readFile(path, function (error, data) {
                if (error) {
                    reject(error);
                    return;
                }
                resovle(data); // 成功，返回data
            });
        });
    };

    readFileFun('./test.txt').then(function (data) {
        console.log('dataPromise:', data.toString());
    }).catch(function (e) {
        console.log("catchError:", e);
    });
}

{
    /* node中的promisify */
    var _readFileFun = promisify(fs.readFile);
    _readFileFun('./test.txt').then(function (data) {
        console.log('dataPromisify:', data.toString());
    }).catch(function (e) {
        console.log("catchError:", e);
    });
}

{
    /* es6中的generator */
    var gene = /*#__PURE__*/regeneratorRuntime.mark(function gene(p) {
        return regeneratorRuntime.wrap(function gene$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return console.log(p + 1);

                    case 2:
                        _context.next = 4;
                        return console.log(p + 2);

                    case 4:
                        console.log(p + 3);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, gene, this);
    });

    var geneF = gene(1);
    //    setInterval(_ => {
    //        geneF.next() // 每秒执行一次next(), 调用geneF
    //    }, 1000);
    geneF.next();
    geneF.next();
}

{
    /* async,await 就是generator的语法糖 */
    var _readFileFun2 = promisify(fs.readFile);
    var rf = async function rf() {
        // async 函数
        try {
            // 结合try 一起使用
            var data = await _readFileFun2('./test.txt'); // awiat  等待执行完成
            console.log('dataAsync:', data.toString());
        } catch (error) {
            // 捕获错误
            console.log('errorAsync:', error);
        }
    };
    rf();
}