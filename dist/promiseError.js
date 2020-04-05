"use strict";

{
    var fn1 = async function fn1() {
        return user;
    };

    fn1().then(function (v) {}).catch(function (error) {
        console.log(error.message);
    });
}