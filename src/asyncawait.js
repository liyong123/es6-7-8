const fs = require('fs')
const promisify = require('util').promisify  /* node8 中的方法 */

{
    /* 1、基于回调做异步处理，读取完文件，回调处理 */
    fs.readFile('./test.txt', (error, data) => {
        console.log("data:", data.toString())
    })
}

{
    /* 2、es6的Promise() 本质：链式回调 */
    const readFileFun = path => {
        return new Promise((resovle, reject) => {
            fs.readFile(path, (error, data) => {
                if(error) {
                    reject(error)
                    return
                }
                resovle(data) // 成功，返回data
            })
        })
    }

    readFileFun('./test.txt').then(data => {
        console.log('dataPromise:', data.toString())
    }).catch(e => {
        console.log("catchError:", e)
    }) 
}

{
    /* node中的promisify */
    const readFileFun = promisify(fs.readFile)
    readFileFun('./test.txt').then(data => {
        console.log('dataPromisify:', data.toString())
    }).catch(e => {
        console.log("catchError:", e)
    }) 
}

{
   /* es6中的generator */
   function* gene(p) {
       yield console.log(p + 1); //遇到yield，就要等待,直到下一次next, 没有next 下面的语句不执行
       yield console.log(p + 2)
       console.log(p + 3)
   }
   const geneF = gene(1)
//    setInterval(_ => {
//        geneF.next() // 每秒执行一次next(), 调用geneF
//    }, 1000);
   geneF.next()
   geneF.next()
}

{
    /* async,await 就是generator,Promise的语法糖 */
    const readFileFun = promisify(fs.readFile)
    const rf = async () => { // async 函数
        try { // 结合try 一起使用
            const data = await readFileFun('./test.txt') // awiat  等待执行完成
            console.log('dataAsync:', data.toString())   
        } catch (error) { // 捕获错误
            console.log('errorAsync:', error)
        }
    }
    rf()
}