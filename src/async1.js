(function test() { // 自调用函数
    setTimeout(function() {
        console.log(1);
    }, 0); //宏任务 异步
    
    new Promise( resolve => {
        console.log(2); // resolve方法内也是同步的，resolve通知后 then才会加入微任务队列，才执行
        for (let i = 0; i < 1000000; i++) {
        i == 9999 && resolve();
        }
        console.log(3); // 同步
    }).then(function() { // 异步 .then是微任务，比定时器早执行，但是必须resolve通知后 then才会加入任务队列，才执行
        console.log(4); 
    });
    
    console.log(5); // 同步
    //   输出结果：2 3 5 4 1
})();


