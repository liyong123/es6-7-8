/* 实现一个promise.all */
function  PromiseAll(pArr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(pArr)) {
            reject(new TypeError('arguments must be array'))
        }
        let arrTemp = [],
            i = 0
        pArr.map((item, index) => {
            return item.then(res => {
                getAllData(index, res)
            }).catch(error => {
                reject(error)
            })
        })
        function getAllData(index, res) {
            arrTemp[index] = res
            if(i === pArr.length - 1) {
                resolve(arrTemp)
            }
            i++
        }
    })
}
  
/* 验证 */
function funAsync1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise1')
        }, 1000)
    })
}

function funAsync2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise2')
        }, 2000)
        /* somedata + 1 */
    })
}

function funAsync3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise3')
        }, 3000)
    })
}
  
PromiseAll([funAsync1(), funAsync2(), funAsync3()]).then(res => {
    console.log(res) // 3秒之后打印 ['promise1', 'promise2', 'promise3']
}).catch(error => {
    console.log(error)
})