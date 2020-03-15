'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* 解构赋值可以理解成赋值操作的语法糖，它是针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。 */
// 数组的解构
{
    var a = void 0,
        b = void 0,
        c = void 0;
    var _ref = [1, 2];
    a = _ref[0];
    b = _ref[1];
    c = _ref[2];

    console.log(a, b, c); //1 2 undefined , c没有对应的解构，所以是undefined。
}

{
    var _a = void 0,
        _b = void 0,
        _c = void 0;
    var _ref2 = [1, 2];
    _a = _ref2[0];
    _b = _ref2[1];
    var _ref2$ = _ref2[2];
    _c = _ref2$ === undefined ? 10 : _ref2$;

    console.log(_a, _b, _c); //1 2 10 ,c默认值是10 。
}

{
    var _a2 = void 0,
        _b2 = void 0,
        _c2 = void 0;
    _a2 = 1;
    _b2 = 2;
    var _ = 3;
    _c2 = _ === undefined ? 10 : _;

    console.log(_a2, _b2, _c2); //1 2 3 ,c的默认值是10 ，但是有对应的解构值3，默认值被覆盖。
}

{
    var _a3 = void 0,
        other = void 0;
    _a3 = 1;
    other = [2, 3];

    console.log(_a3, other); //1, [2, 3] ,后面两项被解构到other数组中。
}

{
    var _a4 = void 0,
        _b3 = void 0;
    var _ref3 = [1, 2, 3];
    _a4 = _ref3[0];
    _b3 = _ref3[2];

    console.log(_a4, _b3); //1, 3 ,解构前后两项,中间一项是占位符，不解构。
}
// 对象的解构
{
    var _a5 = void 0,
        _b4 = void 0;
    var _a$b = { a: 10, b: 20 };
    _a5 = _a$b.a;
    _b4 = _a$b.b;

    console.log(_a5, _b4);
}

{
    var num = void 0,
        total = void 0; //自定义属性名
    var _a$b2 = { a: 100, b: 200 };
    num = _a$b2.a;
    total = _a$b2.b;

    console.log(num, total);
}

// 解构的用途：对后端返回的数据进行解构
{
    var getData = function getData() {
        return {
            name: '张三',
            cars: [{
                name: '宝马',
                price: '50'
            }]
        };
    };

    var res = getData();

    var personName = res.name,
        _res$cars = _slicedToArray(res.cars, 1),
        _res$cars$ = _res$cars[0],
        carName = _res$cars$.name,
        carPrice = _res$cars$.price;

    console.log(personName, carName, carPrice); // 张三 宝马 50
}