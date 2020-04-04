{
    /* race：谁跑的快，就以谁为准, 执行回调,慢的resolve()将不会执行
      可以用来判断请求是否超时
    */
    function funAsync1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务1执行完成')
                resolve('随便什么数据1')
            }, 2000)
        })
    }

    function funAsync2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('异步任务2执行完成')
                resolve('随便什么数据2')
            }, 1000)
        })
    }

    Promise.race([funAsync1(), funAsync2()]).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error.message)
    })
}


{
    /* 两者结合 */
    function ajaxRequest(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.send()
            xhr.onload= function() {
                if(this.status === 200) {
                    resolve(JSON.parse(this.response)) // 走到then的第一个回调函数参数
                } else {
                    reject('加载失败') // 走到then的第二个回调函数参数
                }
            }
            xhr.onerror = function() {
                reject(this)
            }
        })
    }
    /* 判断请求是否超时 */
    function query(url, delay) {
        let promises = [
            ajaxRequest(url),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('请求超时')
                }, delay)
            })
        ]
        return Promise.race(promises)
    }

    // query('localhost:8080', 10).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })
}