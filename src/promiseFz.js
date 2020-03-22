{
    /* ajax 请求 */
    function ajax(url, callback) { // 回调处理异步请求
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.send()
        xhr.onload= function() {
            if(this.status === 200) {
                callback(JSON.parse(this.response))
            } else {
                throw new Error('加载失败')
            }
        }
        xhr.onerror = function(error) {
           console.log("ajax错误：", error)
        }
    }
    let url = 'localhost:8888'
    ajax(`${url}`, function(data) {
        console.log('data:', data)
    })
}

{
    // promise 异步处理
    function request () {
        return new Promise((resolve, reject) => {
            resolve('成功')
        })
    }
    request().then(value => { //成功处理
        someData1
        console.log(value)
    }, reason => {
        console.log(reason.message)
    }).catch(error => {
        /* catch的作用：执行resolve时（即then的第一个参数方法），
        如果抛出异常，比如某个变量未定义等，那么并不会报错卡死js执行，
        而是会进入到这个catch中，这就是他与then的第二个参数方法的区别 
        当然catch也是集中处理错误的，所有then的第二个参数可以不写
        */
        console.log('catch抛出的错误', error.message)
    })
}

{
    // promise 异步处理
    function request () {
        return new Promise((resolve, reject) => {
            /* resolve('成功') */
            someData2 + 1
            // throw( new Error()) // 等同于reject(error)
            // reject(error) // reject 如果不写，then的第二个参数 也会抛出错误信息
        })
    }
    request().then(value => { //成功处理
        console.log(value)
    }, reason => { // 处理promise里面的错误
        console.log(reason.message) // someData2 is not defined
    }).catch(error => {
        console.log('catch抛出的错误', error.message)
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

    /* 调用 */
    let url = 'localhost:8888'
    ajaxRequest(`${url}`).then(value => {
        console.log(value)
    }, reason => {
        console.log('then的第二个参数输出的错误:', reason)
    })
}