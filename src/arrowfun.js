/* 箭头函数 */
{
    /* 一、形参的情况 */
    /* 1、没有形参: 括号()不能省略，或者用‘_’代替 */
    const fun = () => console.log('我是没有形参的箭头函数()')
    fun()
    const fun2 = _ => console.log('我是没有形参的箭头函数_')
    fun2()
    /* 2、只有一个形参：括号()能省略 */
    const fun3 = p => console.log(`我是有一个形参的箭头函数, ${p}`)
    fun3(100)
    /* 3、两个及以上形参：括号()不能省略 */
    const fun4 = (x, y) => console.log(x + y)
    fun4(100, 100)

}
console.log('-------------------------------')
{
    /* 二、函数体的情况 */
    /* 1、函数体只有一条语句或者只有一个运算表达式的时候，大括号{} 可以省略--->会自动返回语句或者表达式的执行的结果 */
    const fun = () => console.log('函数体只有一条语句')
    fun()
    const fun2 = (x, y) => x + y
    const f2 = fun2(100, 100)
    console.log(f2)
    const fun3 = (x, y) => { return x + y }
    const f3 = fun3(100, 100)
    console.log(f3)
    /* 2、箭头函数不止一条语句或者表达式的时候，大括号{}不能省略 */
    const fun4 = (x, y) => {
        let z = x + y
        return z
    }
    const f4 = fun4(200, 200)
    console.log(f4)
}

console.log('-------------------------------')
  