/* 方法1 */
{
    /* 拿第一项和后面的所有项比较，最后一项后面没比较项 , 所以i < arr.length - 1*/
    function arrayFilter(arr) {
        for(let i = 0; i < arr.length - 1; i++) {
            let arrS = arr.slice(i + 1)
            if(arrS.indexOf(arr[i]) > -1) { // 同arrS.includes(arr[i])
                arr.splice(i, 1) // 包含则删除当前项    
                i-- // splice()改变原来数据，如果i继续++，导致数组塌陷，所以i要--,性能不好。
            }
        }
    }
    const arr = [78, 11, 34, 11, 22, 22, 45, 32, 32]
    arrayFilter(arr)
    console.log(arr)
}
/* 方法2 */
{
    /* 拿第一项和后面的所有项比较，最后一项后面没比较项 , 所以i < arr.length - 1*/
    let arr = [78, 11, 34, 11, 22, 22, 45, 32, 32]
    for(let i = 0; i < arr.length - 1; i++) {
        let arrS = arr.slice(i + 1)
        if(arrS.indexOf(arr[i]) > -1) {
            arr[i] = null
        }
    }
    arr = arr.filter(item => item !== null)
    console.log(arr)
}
/* 方法3 */
{
    /* 拿第一项和后面的所有项比较*/
    function arrayFilter(arr) {
        const arrT = []
        for(let i = 0; i < arr.length; i++) {
            let arrS = arr.slice(i + 1)
            if(!(arrS.indexOf(arr[i]) > -1)) {
               arrT.push(arr[i])  // 不重复的项提取出来
            }
        }
        return arrT
    }
    const arr = [78, 11, 34, 11, 22, 22, 45, 32, 32]
    console.log(arrayFilter(arr)) 
}
/* 方法四 */
{
   /* 拿数组中的每项向新容器中存储，如果已经存储过了，把当前项干掉 */
   let obj = {}
   let arr = [78, 11, 34, 11, 22, 22, 45, 32, 32]
   for(let i = 0; i < arr.length; i++) {
       let item = arr[i]
       if(typeof obj[item] !== 'undefined') {
           arr[i] = arr[arr.length - 1]
           arr.length--
           i--
           continue
       }
       obj[item] = item
   }
   obj = null
   console.log(arr)
}