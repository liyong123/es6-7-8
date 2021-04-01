/* 模板文件 */
var tpl = (function(){
    function tab(field) {
        switch(field) {
            case 'tab': // tab模板
                return (
                    `<div class="tab-item {{current}}">{{tab}}</div>`
                )
            case 'page': 
                return (
                    `<div class="page-item {{current}}">{{page}}</div>`
                )
            default:
                break 
        }
    }
    /* 立即执行函数执行，返回tab作为tpl的方法 */
    return {
        tab: tab
    }
})()