{
    /* map 实现promise队列 */
    function queue(num) {
        let promise = Promise.resolve()
        num.map(v => {
            /* 上一次promise执行完，才执行下一次啊 */
            promise = promise.then(_ => {
                /* 返回的Promise实例再赋值给promise，然后依次执行promise队列 */
                return new Promise(resolve => {
                     setTimeout(() => {
                         console.log(v)
                         /* 执行resolve(), 触发then() */
                         resolve()
                     }, 1000)
                })
            })
        })
    }
    const num = [1, 2, 3, 4, 5]
    queue(num)
}

{
    /* 实际应用 */
    function queue(num) {
        let promise = Promise.resolve()
        num.map(v => {
            /* 上一次promise执行完，才执行下一次啊 */
            promise = promise.then(_ => {
                /* 返回的Promise实例再赋值给promise，然后依次执行promise队列 */
                return v()
            })
        })
    }

    function asyncFun1() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('asyncFun1')
                resolve()
            }, 6000)
        })
    }

    function asyncFun2() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('asyncFun2')
                resolve()
            }, 1000)
        })
    }
    queue([asyncFun1, asyncFun2])
}