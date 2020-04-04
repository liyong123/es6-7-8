/* promise封装定时器 */
{
    function timeout(delay = 1000) {
        return new Promise(resolve => {
            setTimeout(resolve, delay)
        })
    }
    timeout(2000).then(() => {
        console.log('你真慢')  /* 2秒之后输出 */
        return timeout(2000) //再返回一个promise 
    }).then(() => {
        console.log('你更慢')
    })
}