var tools = (function() {
    function tplReplace(tpl, replaceObj) {
        return tpl.replace(/\{\{(.*?)\}\}/g, function(node, key) {
            /* 将tpl中每个{{}}及里面的东西替换成replaceObj中对应的值 */
            return replaceObj[key.trim()]
        })
    }

    return {
        tplReplace: tplReplace
    }
})()