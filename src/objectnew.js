 /* 对象中扩展运算符的使用 */
{
    /* 1、复制对象 要安装：npm install babel-plugin-transform-object-rest-spread -D*/
    const obj= {name: 'zhangsan', age: 20};
    let objNew= {...obj} 
    // 浅拷贝 ，指向新的内存，如果对象里面嵌套对象，
    // 新对象中的嵌套对象只是复制嵌套对象的指针，新旧嵌套对象都还是指向原先的内存,
    // 所以改变原对象的嵌套对象，新对象的嵌套对象也跟着变化

    obj.color = 'pink'
    console.log('objNew1:', objNew)

}
{
    /* 2-1、替换对象中的相同属性 */
    const obj= {name: 'zhangsan', age: 20}
    let objNew= {...obj, name: 'lisi'}
    console.log('objNew2:', objNew)
    /* 2-2、新增对象中的属性 */
    const obj2= {name: 'zhangsan', age: 20}
    let objNew2= {...obj, color: 'red'}
    console.log('objNew2-2:', objNew2)

}
{
    /* 3、合并对象 */
    const obj= {name: 'zhangsan', age: 20}
    const obj2= {address: '南京'}
    let objNew= {...obj, ...obj2}
    console.log('objNew3:', objNew)
   /* 注意点：如果对象中还包含对象，复制的只是被包含对象的指针 */
}
/* 对象的简写 */
{
    let name= 'zhangsan', age= 20
    let obj= { //传统的写法
        name: name,
        age: age,
        say: function(){
            console.log('say hello')
        }
    }
    // es6写法
    let objNew= {
        name,
        age,
        say() {
            console.log('say hello New')
        }
    }
    console.log('obj:', obj);
    console.log('objNew:', objNew)
    obj.say()
    objNew.say()
}
// 对象简写2
{
    let key = 'name'
    let obj ={}
    obj[key] = 'zhangsan' // 传统写法

    let objNew= { // es6写法
        [key]: 'lisi'
    }
    console.log(obj, objNew)
}

// Object新增方法
{
    /* Object.is() 判断两个值是否全等，判断NaN时与全等 === 不同，其他与全等相同 */
    let res = Object.is(NaN, NaN);
    console.log(res, NaN === NaN) //true false

    /* Object.assign() //对象的浅拷贝 */
    const obj = {name: 'zhangsan', age: 20}
    let objNew = Object.assign({}, obj, {color: 'red'})
    console.log('assign:', objNew)

    /* Object.keys(), Object.values(), Object.entries() */
    const person = {
        name: 'zhangsan',
        age: 20,
        say() {
            console.log(this.name)
        }
    }
    let keys = Object.keys(person); /* 键名 */
    console.log('keys:', keys)
    
    let values = Object.values(person) /* 键值 */
    console.log('values:', values) 

    let entries = Object.entries(person) /* 键值对 */
    console.log('entries:', entries)

}