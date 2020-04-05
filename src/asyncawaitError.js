{
    /* async相当于new Promise的语法糖，所以和Promise一样可以捕获错误 */
    async function fn1() {
        /* user未定义 */
        return user
    }
    fn1().then(v => {
       console.log(v)
    }).catch(error => {
        /* 捕获错误 */
        console.log(error.message)
    })
}

{
    /* await错误处理 */
    async function fn1() {
        try {
            let user = await ajax('localhost:8080')
            console.log('不会输出') // 此处报错，不会输出
            return user
        }catch(error) {
           console.log(error.message)
        }
        console.log('会输出')
    }
    fn1()
}

{
    /* await错误处理 */
    async function fn1() {
        try {
            let user = await new Promise(resolve => {
                setTimeout(_ => {
                    resolve('没有错误')  /* resolve执行，值通过await赋值给user */
                }, 1000)
            }) 
            return user
        }catch(error) {
           console.log(error.message)
        }
    }
    fn1().then(v => {
        console.log(v)
    })
}