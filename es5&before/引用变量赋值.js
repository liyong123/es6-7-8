{
    var obj1 = {
        name: 'Tom'
    }
    var obj2 = obj1
    obj1.name = 'Rose'
    console.log(obj2.name) // Rose
    function fn(obj) {
        obj.name = 'Jack'
    }
    fn(obj1) //obj1实参赋值给obj形参，即obj1保存的对象地址值拷贝给obj,则obj还是指向obj1
    console.log(obj2.name) // Jack
}

{
    var a = 3
    function fn(a) {
        a = a + 1
    }
    fn(a) // 全局的a与函数内部没有关系
    console.log(a) // 3
}

(function(){
   var a = 3
   console.log(a + 3)
})()


{
    function Fun() {
    }
    Fun.prototype.test = function() {
        console.log('test')
    }
    var fn = new Fun()
    fn.test()
    console.log(Fun.prototype.constructor === Fun )
    console.log(Fun.prototype === fn.__proto__)
    console.log(fn.__proto__.__proto__ === Object.prototype) // Object.prototype就是Object的原型对象
}

{
    function Student() {
        this.name = 'Jack'
    }
    Student.prototype.test = function() {
        console.log('Student.prototype.test')
    }
    var s1 = new Student()
    s1.name = 'Tom'
    s1.test = function() {
        console.log('s1.test')
    }
    var s2 = new Student()
    /* console.log(s1)
    console.log(s2) */
    console.log(s1.name)
    console.log(s1.test())
    console.log(s2.name)
    console.log(s2.test())
}

{
    function Fun() {}
    var fn1 = new Fun()
    console.log(fn1 instanceof Fun)
    console.log(fn1 instanceof Object)
}

{
    function fn() {
        bbb = 3 // fn执行，bbb变成未声明的意外的全局变量
    }
    fn()
    console.log(bbb)
}
{
    function fn() {
        console.log(this)
    }
    fn()
}