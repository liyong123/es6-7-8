function bubble(arr) {
    let temp = null
    for (let i = 0; i < arr.length - 1; i++) { // 外层循环i 控制比较的轮数
        for(let j = 0; j < arr.length-1-i; j++) { // 里面循环j控制每一轮比较的次数
            if(arr[j] > arr[j+1]) { // 当前项大于后一项
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
const arr = [12, 8, 24, 16, 1]
bubble(arr)
console.log(arr)