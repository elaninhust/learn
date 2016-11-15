//将不同浏览器绑定事件的方法柯里化之后的写法
const attach = (function() {
    if (window.addEventListener) {
        return function(ele, fn, capture) {
            ele.addEventListener(type, function(ev) {
                fn.call(ele, ev);
            }, capture);
        }
    } else if (window.attachEvent) {
        return function(ele, type) {
            ele.attachEvent('on' + type, function(ev) {
                fn.call(ele, ev);
            });
        }
    }
})();
