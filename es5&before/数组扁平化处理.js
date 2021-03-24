/* 方法1 */
{
    const arr = [1, 188, 3, ['abc', 4, 5, 6, ['def', 7, 8, 9]]];
    const deepFloat = function(list) {
        return list.reduce((acc, currV) => {
            return acc.concat(Array.isArray(currV) ? deepFloat(currV) : currV)
        }, [])
    }
    console.log('1:', deepFloat(arr))
}
/* 方法2 */
{
    /* flat展开数组 */
    const arr = [1, 2, 3, ['abc', 4, 5, 6, ['def', 7, 8, 9]]]
    let list = [].concat(...arr) //只能展开到第一层
    console.log('list:', list)
    let flatList = arr.flat(Infinity)  //无限级，不传参数，默认展开第一层
    console.log('2:', flatList) //flatList: [1, 2, 3, "abc", 4, 5, 6, "def", 7, 8, 9]
}
/* 方法3 */
{
    /* 转换成字符串 */
    /* 缺陷：多维数组中不能有字符串项 ，否则字符串项为NaN*/
    let arr = [1, 2, 3, [100, 4, 5, 6, [20, 7, 8, 9]]]
    arr = arr.toString().split(',').map(item => parseFloat(item))
    console.log('3:', arr)
}
/* 方法4 */
{
    /* 转换成字符串 */
    /* 缺陷：多维数组中不能有字符串项 ，否则字符串项为NaN*/
    let arr = [1, 2, 3, [100, 4, 5, 6, [20, 7, 8, 9]]]
    arr = JSON.stringify(arr).replace(/(\[|])/g, '').split(',').map(item => parseFloat(item))
    console.log('4:', arr)
}
/* 方法5 */
{
    let arr = [1, 2, 3, [100, 4, 5, 6, [20, 7, 8, 9]]]
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr) // 去除一层(降维)
    }
    console.log('5:', arr)
}
/* 方法6 */
{
    /* 递归：判断是不是数组，是，递归，不是push到容器中 */
}