{
    function funAsync1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务1执行完成')
                resolve('随便什么数据1')
            }, 1000)
        })
    }

    function funAsync2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务2执行完成')
                resolve('随便什么数据2')
            }, 3000)
        })
    }
    function funAsync3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务3执行完成')
                reject('失败了')
            }, 5000)
        })
    }

    function funAsync4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务4执行完成')
                reject('失败了')
            }, 7000)
        }).catch(error => {
            /* 此处已经是解决状态，所以其他成功的异步还是会执行resolve，而这个不成功的是undefined */
            console.log(error)
        })
    }

    /* Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完成后才执行回调函数，
    也就是resolve()，all接收一个数组参数，里面的值最终都是返回Promise对象 ,
     如果其中有一个失败，则就是失败的*/
    Promise.all([funAsync1(), funAsync2()]).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error.message)
    })

    Promise.all([funAsync1(), funAsync2(), funAsync3()]).then(result => {
        console.log(result)
    }).catch(error => {
        /* 在此处捕获错误 */
        console.log(error)
    })

    Promise.all([funAsync1(), funAsync2(), funAsync4()]).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
}