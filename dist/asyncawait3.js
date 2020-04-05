'use strict';

{
    /* 模拟加载进度 */
    /* function ajaxRequest(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.send()
            xhr.onload= function() {
                if(this.status === 200) {
                    resolve(JSON.parse(this.response)) // 走到then的第一个回调函数参数
                } else {
                    reject('加载失败') // 走到then的第二个回调函数参数
                }
            }
            xhr.onerror = function() {
                reject(this)
            }
        })
    }
    */
    /* function query(name) {
        return ajaxRequest(`http://localhost:8888/user.php?name=${name}`)
    } */

    var loadUser = async function loadUser(users) {
        var loading = document.getElementById('loading');
        for (var i = 0, len = users.length; i < len; i++) {
            //    let user = await query(users[i])
            var progress = (i + 1) / users.length * 100;
            loading.style.width = progress + '%';
            loading.innerHTML = Math.round(progress) + '%';
        }
    };

    loadUser(['zhangsan', 'lisi']);
}