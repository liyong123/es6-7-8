/* es6加强对Unicode的支持 
在es5中javascript允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的Unicode码点。
这种表示法只限于码点在u0000~uFFFF之间的字符。超出这个范围，必须用两个双字节（四个字节）表示，
但是es5却无法识别这个由两个双字节组成的字符。
es6增加了对超出u0000~uFFFF的Unicode范围的字符支持。
es6解决方案：将超过两个字节组成的字符的码点放在一对花括号里就可以正确的识别。
*/

{
    const str1 = 'a';
    const str2 = '\u20bb1' //已经超出范围
    console.log("str2:", str2) //乱码: str2: ₻1
    // 解决方法：
    const str3 = '\u{20bb1}'
    console.log("str3:", str3) //str3: 𠮱
}

//es6中的for...of...循环对象，循环字符串的时候尽量用for...of...
{
    const str3 = '\u{20bb1}'
    for(let i= 0, len=str3.length; i< len; i++ ) {
        console.log('for:', str3[i]) //乱码
    }
    for (const word of str3) {
        console.log('for-of', word) //正确输出
    }
    // for (const iterator of object) {
        
    // }
    // for (const key in object) {
    //     if (object.hasOwnProperty(key)) {
    //         const element = object[key];
            
    //     }
    // }
}

//es6判断字符串是否包含指定字符串，而新增的方法
{
    const str = 'abcZhang123';
    // 1、includes() :包含
    console.log("includes:", str.includes('Zhang')) //includes:true
    // 2、startsWith() ,是否以某个指定字符串开头,第二个参数是下标
    console.log("startsWith:", str.startsWith('Zhang')) //startsWith:false
    console.log("startsWith:", str.startsWith('Zhang', 3)) //startsWith:true
    // 3、endsWith() ,以某个字符串结尾,第二个参数是从开头数到下标之前是否有指定的字符串
    console.log("endsWith:", str.endsWith('Zhang')) //endsWith:false
    console.log("endsWith:", str.endsWith('Zhang', 8)) //endsWith:true
    // 4、repeat(n): 返回一个新的字符串，表示将原字符串重复n次。
    const strRe= str.repeat(3); //参数为0 则返回空字符串
    console.log("strRe:", strRe)
    // 5、padStart:头部补全, padEnd:尾部补全
    let strPad= 'san';
    strPad= strPad.padStart(8, 'zhangli')//从头部补全成8位，第二个参数如果超出，则舍弃
    console.log("strPad:", strPad)
    let strEnd= 'li'
    strEnd= strEnd.padEnd(4, 'si')
    console.log("strEnd:", strEnd)
}

// es6：模板运算符  `${}`
{
   const name= 'liyong'
   const age= 18 
   console.log(`My name is ${name}, ${age} years old`)
}