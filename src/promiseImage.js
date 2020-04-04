{
    /* promise异步加载图片 */
    function loadImage(src) {
        return new Promise((resolve, reject) => {
            const image = new Image()
            image.src = src
            image.onload = () => {
                resolve(image) 
            }
            image.onerror = reject
            document.body.appendChild(image) // 图片放到body里面后 ，可以对图片进行处理,即 resolve的then
        })
    }
    loadImage('image/fclm_1.jpg').then((image) => {  // 不能写相对路径
        // 得到image 对象
        image.style.border = 'dotted 10px pink'
    }).catch(reason => {
        console.log(reason.message)
    })
}