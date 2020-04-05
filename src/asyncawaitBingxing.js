{
    /* await并行执行技巧 */
    function fn1() {
        return new Promise(resolve => {
            setTimeout(_ => {
                resolve('第一')
            }, 2000)
        })
    }
    function fn2() {
        return new Promise(resolve => {
            setTimeout(_ => {
                resolve('第二')
            }, 2000)
        })
    }

    async function fnResult() {
        /* fn1, fn2 并行 */
        let res1 =  fn1()
        let res2 =  fn2()
        let res1Data = await res1;
        let res2Data = await res2;
        console.log(res1Data, res2Data)
    }
    fnResult()

    async function fnResult2() {
        /* fn1, fn2 并行 */
        let res = await Promise.all([fn1(), fn2()])
        return res
    }

    fnResult2().then(v => {
        console.log(v)
    })
}