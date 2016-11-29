//将不同浏览器绑定事件的方法柯里化之后的写法
const attach = (function() {
    if (window.addEventListener) {
        //判断是现代浏览器
        return function(ele, fn, capture) {
            ele.addEventListener(type, function(ev) {
                fn.call(ele, ev);
            }, capture);
        }
    } else if (window.attachEvent) {
        //判断是ie浏览器
        return function(ele, type) {
            ele.attachEvent('on' + type, function(ev) {
                fn.call(ele, ev);
            });
        }
    }
})();
