'use strict';

{
    /* 数组的复制 */
    var arr = [1, 2, 3, 4];
    var arr2 = arr; //不能这样写，引用类型，arr2和arr都是指向同一块内存，所以arr的改变会影响arr2
    arr.push(5);
    console.log('arr2:', arr2);
}

{
    // es6数组的复制
    var _arr = [1, 2, 3, 4];
    var _arr2 = [].concat(_arr); //实现浅拷贝 相当于const arr2= [].concat(arr)
    _arr.push(10);
    console.log("arr2:", _arr2);
}

{
    /* 分割数组 */
    var _arr3 = [1, 2, 3, 4];

    var other = _arr3.slice(1);

    console.log('other:', other);
}

{
    /* 给函数传递参数 常见*/
    var add = function add(a, b) {
        return a + b;
    };

    console.log("result:", add.apply(undefined, [1, 2])); //result:3
}
/* es6、7 提供的数组的新的方法 */
{
    // 1、fill 替换数组每项内容
    var _arr4 = [1, 2, 3, 4, 5];
    var _arr5 = [].concat(_arr4).fill(3); //每项都替换成3
    var arr3 = [].concat(_arr4).fill(3, 1, 4); //第二个参数是下标，第三个参数是第几项
    console.log(_arr5); // [3, 3, 3, 3, 3]
    console.log(arr3); // [1, 3, 3, 3, 5]
}

{
    // 2、find、findIndex
    var _arr6 = [{
        name: 'liy',
        age: 18
    }, {
        name: 'zhangsan',
        age: 20
    }, {
        name: 'zhangsan',
        age: 30
    }];
    var result = _arr6.find(function (item) {
        return item.name === 'zhangsan';
    });
    console.log("findItem:", result); //找到第一项为zhangsan的项，findItem: {name: "zhangsan", age: 20}
    var resultIndex = _arr6.findIndex(function (item) {
        return item.name === 'zhangsan';
    });
    console.log('findIndex:', resultIndex); // 找到符合条件的第一项的下标，1
}

{
    // 3、includes 数组中是否包含某项，返回布尔值,只能做些基本数据类型的的操作
    var _arr7 = [1, 2, 4, 6, 4, 5];
    var _result = _arr7.includes(4);
    console.log('includes:', _result); //true
}

{
    var _ref;

    /* 4、 flat展开数组 */
    var _arr8 = [1, 2, 3, ['abc', 4, 5, 6, ['def', 7, 8, 9]]];
    var list = (_ref = []).concat.apply(_ref, _arr8); //只能展开到第一层
    console.log('list:', list);
    var flatList = _arr8.flat(2); //不传参数，默认展开第一层
    console.log('flatList:', flatList); //flatList: [1, 2, 3, "abc", 4, 5, 6, "def", 7, 8, 9]
}