{
    /* 数组的复制 */
    const arr= [1, 2, 3, 4]
    const arr2= arr //不能这样写，引用类型，arr2和arr都是指向同一块内存，所以arr的改变会影响arr2
    arr.push(5)
    console.log('arr2:', arr2)
}

{
    // es6数组的复制
    const arr = [1, 2, 3, 4]
    const arr2 = [...arr] //实现浅拷贝 相当于const arr2= [].concat(arr)
    arr.push(10)
    console.log("arr2:", arr2)
}

{
    /* 分割数组 */
    const arr = [1, 2, 3, 4]
    let [, ...other] = arr
    console.log('other:', other)
}

{
    /* 给函数传递参数 常见*/
    function add(a, b) {
        return a + b
    }
    console.log("result:", add(...[1, 2])) //result:3
}
 /* es6、7 提供的数组的新的方法 */
{
    // 1、fill 替换数组每项内容
    const arr= [1, 2, 3, 4, 5]
    const arr2= [...arr].fill(3); //每项都替换成3
    const arr3= [...arr].fill(3, 1, 4) //第二个参数是下标，第三个参数是第几项（也是下标但不包括此项）
    console.log(arr2) // [3, 3, 3, 3, 3]
    console.log(arr3) // [1, 3, 3, 3, 5]
}

{
    // 2、find、findIndex
    const arr= [
        {
            name: 'liy',
            age: 18
        },
        {
            name: 'zhangsan',
            age: 20
        },
        {
            name: 'zhangsan',
            age: 30
        }
    ]
    let result= arr.find(item => {
        return item.name ===  'zhangsan'
    })
    console.log("findItem:", result) //找到第一项为zhangsan的项，findItem: {name: "zhangsan", age: 20}
    let resultIndex= arr.findIndex(item => {
        return item.name === 'zhangsan'
    })
    console.log('findIndex:', resultIndex) // 找到符合条件的第一项的下标，1
}

{
    // 3、includes 数组中是否包含某项，返回布尔值,只能做些基本数据类型的的操作
    const arr = [1, 2, 4, 6, 4, 5]
    let result = arr.includes(4)
    console.log('includes:', result) //true
}

{
    /* 4、 flat展开数组 */
    const arr = [1, 2, 3, ['abc', 4, 5, 6, ['def', 7, 8, 9]]]
    let list = [].concat(...arr) //只能展开到第一层
    console.log('list:', list)
    let flatList = arr.flat(Infinity)  //无限级，不传参数，默认展开第一层
    console.log('flatList:', flatList) //flatList: [1, 2, 3, "abc", 4, 5, 6, "def", 7, 8, 9]
}