/* 实现一个promise.all */
function  PromiseAll(promiseArray) {
    return new Promise((resolve,reject) => {
      //判断参数类型
      if(!Array.isArray(promiseArray)){
          return reject(new TypeError('arguments muse be an array'))
      }
      let index = 0,
          len = promiseArray.length,
          arrTemp = new Array(len);
      for(let i = 0; i < len; i++){
          Promise.resolve(promiseArray[i]).then(res => {
            index++;
            arrTemp[i] = res;
            if(index == len){
                return resolve(arrTemp)
            }
          }).catch(error => {
            console.log(error)
        })
      }
   })
  }
  
  // 验证
function funAsync1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise1')
        }, 1000)
        /* somedata + 1 */
    })
}

function funAsync2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise2')
        }, 2000)
    })
}

function funAsync3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('promise3')
        }, 3000)
    })
}
  
 PromiseAll([funAsync1(), funAsync2(), funAsync3()]).then(res =>{ 
    console.log(res) // 3秒之后打印 ['promise1', 'promise2', 'promise3']
 }).catch(error => {
    console.log(error)
  })