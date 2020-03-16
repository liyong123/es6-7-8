{
    /* map数组的映射 */
    const resultJson = [{title: 'react', star: 5}, {title: 'vue', star: 4}, {title: 'webpack', star: 3}]
    let resultSelf= resultJson.map(item => {
        //返回新对象，指向另一块堆内存
        return {
            project: item.title,
            ability: item.star
        }
    })
    console.log('resultJson:', resultJson);
    console.log('resultSelf:', resultSelf)
}

{
    // 以上方式的传统做法
    const resultJsonOld = [{title: 'react', star: 5}, {title: 'vue', star: 4}, {title: 'webpack', star: 3}]
    let resultSelfOld = resultJsonOld.map(item => {
        let obj = {}
        Object.assign(obj, item)
        obj.star = item.star > 4? '流弊': '很好'
        return obj
    })
    console.log('resultJsonOld:', resultJsonOld);
    console.log('resultSelfOld:', resultSelfOld)

}

{
    /* reduce:对数组中的每个元素进行一次回调，升序执行，然后将回调值汇总一个返回值 
     @params callback(acc, currentValue, currentIndex, Array), initalValue*/
    /* 
    acc:每次回调的返回值，
    currentValue:当前回调的值，
    currentIndex:currentValue在数组中的位置，
    Array：回调的数组
    initalValue: 用于初始化的返回值
    */
    //1、统计字符串中每个字母出现的次数
    const str = 'abachhdbc' 
    const result = str.split('').reduce((acc, currentV)=>{
      acc[currentV] ? acc[currentV]++ : acc[currentV] = 1 // acc中currentV属性是否存在，存在就+1，否则为1
      return acc
    },{})//空对象作为统计的结果，即给acc提供一个初始值
    console.log("reduceResult:", result)

    /* 2、在不确定数组有几层的情况下，展开数组 , 如果确定有几层则用flat()方法*/
    const arr = [1, 2, 3, ['abc', 4, 5, 6, ['def', 7, 8, 9]]];
    const deepFlat = function(list) {
        return list.reduce((acc, curV)=> {
            return acc.concat(Array.isArray(curV)? deepFlat(curV): curV)
        }, [])
    }
    console.log('deepFlat:', deepFlat(arr))

}
{
    /* Array.from() //将类数组对象转换成数组 ，类数组：字符串、arguments，有length、可遍历 */
    const str= 'zhangsan'
    let strN= Array.from(str)
    console.log("from:", strN)
}