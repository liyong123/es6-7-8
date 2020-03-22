/* JavaScript中的对象，实质就是键值对的集合（Hash结构），但是在对象里只能用字符串作为键名。
在一些特殊的场景里就满足不了需求，正因如此，Map这一数据被提出，他是JavaScript中更完善Hash结构 */

{
    /* 添加属性 */
    let map = new Map();
    map.set([1, 2, 3], 'number');
    console.log('map:', map)

    let map2 = new Map([['name', 'zhangsan'], ['sex', 'male']])
    console.log('map2:', map2)
    console.log('map2的长度：', map2.size)

    map2.set('name', 'lisi').set('ability', ['react', 'vue'])
    console.log('setMap2:', map2)

    /* 读取属性 */
    let getAbility = map2.get('ability')
    console.log('getAbility:', getAbility)

    /* 判断是否有某个属性 */
    let hasProp = map2.has('sex') 
    console.log('hasProp:', hasProp) // true

    /* 删除某个属性 */
    const map3 = new Map()
    map3.set([1, 2], '你好').set('animals', ['dog', 'cat'])
    console.log('map3:', map3);
    map3.delete('animals') // 但是删除不了key为[1, 2]的键值对
    console.log('map3:', map3)
}

{
    /* keys(), values(), entries(), delete(), clear(), forEach() 遍历器生成方法, 可以查看Map实例的__proto__(也就是Map的原型对象) */

    let person = new Map([['name', 'zhangsan'], ['sex', 'male']])
    
    console.log('person:', person)
    for (const key of person.keys()) {
        console.log('key:', key)
    }
    for (const entries of person) {
        console.log('entries:', entries)
    }


}



{
    /* WeakMap只接收对象作为键名，不接受其他的类型的数据作为键名 */
    let weakMap = new WeakMap([
        [{name: 'lisi'}, 'jack']
    ])
    console.log('weakMap:', weakMap)
}