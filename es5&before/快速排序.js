function quick(arr) {
    /* 4、结束递归，（当arr中元素小于一项，则不用处理） */
    if(arr.length <= 1) {
        return arr
    }
    /* 1、找到数组的中间项middleIndex, 并在原数组中删除赋值给middleValue，原数组变成剩余项数组 */
    let middleIndex = Math.floor(arr.length/2)
    let middleValue = arr.splice(middleIndex, 1)
    /* 2、准备左右两个数组，循环剩下数组中的每一项，当前项item比中间项小，放到左边的数组，大，则放到右边的数组 */
    let arrLeft = [],
        arrRight = []
    for(let i = 0; i< arr.length; i++) {
        let item = arr[i]
        item < middleValue ? arrLeft.push(item) : arrRight.push(item)
    }
    /* 3、递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止，最后让左边 + 中间 + 右边拼接成为最后的结果 */
    return quick(arrLeft).concat(middleValue, quick(arrRight))
}

let arr = [12, 8, 24, 16, 1]
console.log(quick(arr))