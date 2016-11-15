#函数柯里化currying
柯里化，就是把接受对个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数并且返回结果的新函数的技术。

柯里化其实是固定一个可以预期的参数，并返回一个特定的函数，处理一批特定的需求。

###柯里化的作用：
1. 参数的复用
2. 提前返回
3. 延迟运行

- 关于参数的复用，参考下面的代码：

```
function currying(fn,...args){
     return function(...rest){
         return fn.call(null,...(args.concat(rest)));
     }
 }
 ```


- 关于提前返回，很常见的一个例子就是兼容现代浏览器以及IE浏览器的事件添加方法。
//没有柯里化的情况

```
const attach=function (ele,fn,type,capture){
     if(window.addEventListener){
         ele.addEventListener(type,function(ev){
             fn.call(el,ev);
         },capture);
     }else if(window.attachEvent){
         ele.attachEvent('on'+type,function(ev){
             fn.call(el,ev);
         });
     }
 }
 ```

//柯里化之后的情况

```
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
 ```

没有使用柯里化的情况下可以看出，每一次使用attachEvent的时候，ie浏览器都会走一遍if...else...，其实只需要走一遍，所以采用了柯里化的情况。

- 关于延迟运行

```
//延迟运行
function currying(fn,...args){
     if(fn.length>args.length){
         return function(...rest){
             return currying(fn,...(args.concat(rest)));
         }
     }
     return fn.call(null,...args);
 }

 const f=(a,b,c)=>a+b+c;

 const g=currying(f,1);
 console.log(g(2,3));

 const g1=currying(f,1,2);
 console.log(g1(3));

 const g2=currying(f);
 console.log(g2(1)(2)(3));
 ```


另外，ES5中的bind方法，用来改变Function执行时候的上下文（函数主体本身不执行，与call/apply直接执行并改变不同），本质上就是延迟执行。

```
cat={
     name:'ivan',
     age:12
 };

 const getName=function(){
     console.log(this.name);
 }.bind(cat);

 getName();


if(!function(){}.bind){
     Function.prototype.bind=function(obj,...args){
         const self=this;
         return function(){
             return self.call(obj,...args);
         }
     };
 }
 ```
