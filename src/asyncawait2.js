{
    async function fn1() {
        return '你好'
    }
    /* async相当于new Promise的语法糖，
    此时的fn1也是一个Promise的实例,状态为resolved, 从未触发then方法 */
    console.log(fn1())

    fn1().then(v => {
        console.log(v)
    })
}
{
    async function fn1() {
        /* 返回一个Promise,也和上面一样的逻辑 */
        return new Promise(resolve => {
            console.log('你很帅')
            resolve('真的吗？')
        })
    }
    fn1().then(v => {
        console.log(v)
    })
}
{
    /* await 避免的then的层层回调 ，await就是then的语法糖*/
    async function fn1() {
       let name = await new Promise(resolve => {
           console.log('name')
           setTimeout(() => {
               /*await等待resolve()执行，取到resolve中的值，所以await相当于then(), 
               从而将得到的值赋给了name */
               resolve('zhangsan')
           }, 2000)
       })
       /* 此await 等待上一个await执行完再执行，多个独立的await避免了 then的层层回调 */
       let address = await new Promise(resolve => {
           console.log('address') //此行的输出也是要等待上面的2秒过后再输出
           setTimeout(() => {
               resolve(name + ' nanjing')
           }, 2000)
       })

       console.log(address)
    }
    fn1()
}


{
    /* sleep 返回一个Promise实例 */
    async function sleep(delay = 5000) {
        return new Promise(resolve => {
           setTimeout(_ =>{
               resolve()
           }, delay)
        })
    }

    async function show() {
        for(const user of ['zhangsan', 'lisi']) {
            await sleep()  /* await延时函数 */
            console.log(user) // 等sleep两秒后执行，再输出
        }
    }

    show()
}