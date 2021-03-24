/* [1, 1, 2, 3, 5, 8, 13, 21, 34, ...] */
/* 传入索引值 得到数列对应的值 */
function fibonacci(n) {
    if(n <= 1) return 1
    let arr = [1, 1]
    let i = n + 1 - 2 // i 是还需要创建多少项，比如n=5，则一共6项，还需要创建4项
    while(i > 0) {
        let a = arr[arr.length - 2], // 数列的倒数第二、第一项
            b = arr[arr.length - 1]
        arr.push(a + b)
        i--
    }
    return arr[arr.length - 1]
}
console.log(fibonacci(0))
console.log(fibonacci(5))
console.log(fibonacci(8))