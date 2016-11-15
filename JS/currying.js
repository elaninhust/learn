const attach=(function(){
    if(window.addEventListener){
        return function(ele,fn,capture){
            ele.addEventListener(type,function(ev){
                fn.call(ele,ev);
            },capture);
        }
    }else if(window.attachEvent){
        return function(ele,type){
            ele.attachEvent('on'+type,function(ev){
                fn.call(ele,ev);
            });
        }
    }
})();