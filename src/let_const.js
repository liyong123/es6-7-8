/* 总结(babel转换之前)：
1、通过var声明的变量没有块作用域，在块{}内声明的变量，可以在块外访问，如for，if。
2、使用let关键字声明的变量，拥有块级作用域，在块{}内声明的变量，外部不允许访问。
   所以在循环内用let声明的i，只在循环内可见，其他循环内也可以let i。
3、通过let声明的全局变量不属于window对象, 但是经过babel转换后，变成window对象
4、在相同的 作用域，或者相同的块中(babel转换之前)：
   1）通过let重新声明一个var变量是不允许的；
   2）同时，用let重新声明一个前面的let变量，也是不允许的；
   3) 用var 声明一个前面的let变量也是不允许的。
5、var声明的变量存在变量提升，let声明的变量不存在变量提升：变量从块的开头一直处于“暂时死区”，直到声明为止。
6、通过const声明的变量，不能重新赋值
7、const变量必须在声明时赋值
8、const没有定义常量值，只是定义了对常量的引用（地址），保存的是内存（栈、堆）中的一个地址，是只读的，因此不可改变常量原始值。
   但是可以改变常量对象的属性或者元素，这就是为什么常用const定义对象、数组、函数，其实只是保存们堆内存中的地址。
   但是不可以为常量对象赋值。
9、const声明的变量也不能变量提升
10、在同一作用域中或者块中，不允许将已有的var或者let 变量重新声明或者重新复制给const   

*/

var i = 1;
for(var i= 0; i< 10; i++) {
    
}
console.log("i:", i); //i = 10 ;for循环的i是全局的变量

;(function() {
   console.log("z:", z);// z:undefined,不会报错原因：变量提升而已
   var z= 20
})()

if(true) {
    var a= 'aa'
}
console.log("a:", a)// a: aa ,a还是相当于全局变量
// 改成块级作用域写法，避免外面访问
// 块级作用域：
if(true) {
    let b= 'bb'
}
// console.log("b:", b) //报错：Uncaught ReferenceError: b is not defined

let global_i = 100;
console.log("global_i:", window.global_i); //global_i: undefined

/* if(true) {
    var c= 'cc'
    let c= 'cc';
    console.log('c: ', c) //babel转换之前报错：Uncaught SyntaxError: Identifier 'c' has already been declared
} */

/* if(true) {
    let d= 'dd'
    let d= 'dd';
    // var d= 'dd';
    console.log('d: ', d) //babel转换之前报错：Uncaught SyntaxError: Identifier 'd' has already been declared
} */

/* ;(function() {
    console.log("zz:", zz);// 报错：Uncaught ReferenceError: Cannot access 'z' before initialization
    let zz= 30
 })() */

//  const pi = 3.14;
//  pi = 3.15;  
//  console.log("pi", pi) 
 //babel转换前报错：Uncaught TypeError: Assignment to constant variable.
 //用babel转换，也转换不了,报错:SyntaxError: src/let_const.js: "pi" is read-only

//  const ss;
//  ss= 'sssss'; //报错：Uncaught SyntaxError: Missing initializer in const declaration


const car = {
    price: '100000',
    type: 'suv'
}
car.price = '2000'
car.color = 'red'

console.log("car:", car)

const arr= ['blue', 'pink'];
arr[0] = 'white';
arr.push('black');

console.log("arr:", arr);