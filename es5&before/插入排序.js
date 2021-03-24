/* 模拟斗地主抓牌 */
function insert(arr) {
    /* 准备一个新数组，用来存储抓到手里的牌， 开始先抓一张牌进来 */
    let handle = []
    handle[0] = arr[0]
    /* 从第二项开始依次抓牌，一直到把台面上的牌抓光 */
    for(let i = 1; i< arr.length; i++) {
       let newA = arr[i] // newA是新抓的牌
       /* 和handle手里的牌依次比较（从后向前比） */
       for(let j = handle.length - 1; j >= 0; j--) {
           let handleB = handle[j] 
           if(newA > handleB) { // 如果当前新抓的牌比手里正在被比较的牌大，则把新抓的牌放到手里被比较的牌后面。
               handle.splice(j+1, 0, newA) 
               break
           }
           /* 已经比到第一项，则把新牌放到手中最前面 */
           if(j === 0) {
               handle.unshift(newA)
           }
       }
    }
    return handle 
}
let arr = [12, 8, 24, 16, 1]
arr = insert(arr)
console.log(arr)