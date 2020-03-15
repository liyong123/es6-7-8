/* 解构赋值可以理解成赋值操作的语法糖，它是针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。 */
// 数组的解构
{
    let a, b, c;
    [a, b, c]= [1, 2]
    console.log(a, b, c) //1 2 undefined , c没有对应的解构，所以是undefined。
}

{
    let a, b, c;
    [a, b, c= 10]= [1, 2]
    console.log(a, b, c) //1 2 10 ,c默认值是10 。
}

{
    let a, b, c;
    [a, b, c= 10]= [1, 2, 3]
    console.log(a, b, c) //1 2 3 ,c的默认值是10 ，但是有对应的解构值3，默认值被覆盖。
}

{
    let a, other;
    [a, ...other]= [1, 2, 3]
    console.log(a, other) //1, [2, 3] ,后面两项被解构到other数组中。
}

{
    let a, b;
    [a, ,b]= [1, 2, 3]
    console.log(a, b) //1, 3 ,解构前后两项,中间一项是占位符，不解构。
}
// 对象的解构
{
    let a, b
    ({a, b}= {a: 10, b: 20})
    console.log(a, b)
}

{
    let num, total ;//自定义属性名
    ({a: num, b: total}= {a: 100, b: 200})
    console.log(num, total)
}

// 解构的用途：对后端返回的数据进行解构
{
    function getData() {
        return {
            name: '张三',
            cars: [
                {
                    name: '宝马',
                    price: '50'
                }
            ]
        }
    }
    let res = getData()
    let {name: personName, cars: [{name: carName, price: carPrice}]} = res;
    console.log(personName, carName, carPrice ) // 张三 宝马 50
}