;(function(doc, tpl, tools) {
    /* 面向对象 */
    function MyTab(el) {
       this.el = doc.querySelector(el)
       this.data = JSON.parse(this.el.dataset.tablist)
       this._index = 0
       this.init()
    }
    /* 初始化启动 */
    MyTab.prototype.init = function() {
       this._render()
       this._bindEvent()
    }
    /* 渲染 */
    MyTab.prototype._render = function() {
        /* 在#my-tab里创建tab的div和page的div */
        var tabWrapper = doc.createElement('div')
        var pageWrapper = doc.createElement('div')
        var oFrag = doc.createDocumentFragment() // 创建文档碎片，一次性插入两个div
        
        tabWrapper.className = 'tab-wrapper'
        pageWrapper.className = 'page-wrapper'

        this.data.forEach(function(item, index) {
            /* 替换tpl中的tab模板 */
            tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tab'), {
                tab: item.tab,
                current: !index ? 'current' : ''
            })

            /* 替换tpl中的page模板 */
            pageWrapper.innerHTML += tools.tplReplace(tpl.tab('page'), {
                page: item.page,
                current: !index ? 'current' : ''
            })
        })
        /* console.log(tabWrapper, pageWrapper) */
        oFrag.appendChild(tabWrapper)
        oFrag.appendChild(pageWrapper)
        this.el.appendChild(oFrag) // oFrag 加入到el中即#my-tab

    }
    /* 绑定处理函数 */
    MyTab.prototype._bindEvent = function() {
        var doms = {
            oTabItems: doc.querySelectorAll('.tab-item'),
            oPageItems: doc.querySelectorAll('.page-item')
        }

        this.el.addEventListener('click', this._handleTabClick.bind(this, doms), false)
    }
    
    MyTab.prototype._handleTabClick = function() {
        var _doms = arguments[0],
            tar = arguments[1].target,
            className = tar.className.trim()

        if(className === 'tab-item') {
            _doms.oTabItems[this._index].className = 'tab-item'
            _doms.oPageItems[this._index].className = 'page-item'
            this._index = [].indexOf.call(_doms.oTabItems, tar)
            tar.className += ' current'
            _doms.oPageItems[this._index].className += ' current'
        }
    }
    window.MyTab = MyTab // 挂载到window供外面调用
})(document, tpl, tools) // 注入全局的tpl、tools