{
    let promise = new Promise(resolve => {
        setTimeout(_ => {
            /* 这个setTimeout宏任务执行了，才会执行里面的内容，
            此时这个setTimeout宏任务已经拿到主线程中执行了
            而resolve()触发的.then这个微任务肯定比console.log('setTimeout')后执行 */
            resolve()
            console.log('setTimeout')
        }, 0)

        console.log('promise')
    }).then(data => {
        console.log('then')
    })
    console.log('执行')
    /* 输出：promise 执行 setTimeout then */
}