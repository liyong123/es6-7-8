
{
    setTimeout(_ => {
        console.log('setTimeout')
    }, 0) // 宏任务

    new Promise(resolve => {
        resolve()
        console.log('promise')
    }).then(data => {
        console.log('then')  // 微任务比宏任务先执行
    })

    console.log('执行')

    /* 输出： promise 执行 then setTimeout */
}