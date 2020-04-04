{
    function interval(delay = 1000, callback) {
       return new Promise(resolve => {
           let id = setInterval(() => {
               callback(id, resolve) // 回调函数
           }, delay)
       })
    }

    interval(100, (id, resolve) => {
        const div = document.querySelector('div');
        let left = parseInt(window.getComputedStyle(div).left)
        div.style.left = left + 10 + 'px'
        if(left >= 200) {
            clearInterval(id)
            resolve(div)
        }
    }).then((div)=> {
        return interval(100, (id, resolve) => {
            let width = parseInt(window.getComputedStyle(div).width)
            div.style.width = width - 10 + 'px'
            if(width <= 20) {
                clearInterval(id)
                resolve(div)
            }             
        })
    }).then(div => {
        div.style.backgroundColor = 'red'
    })
}