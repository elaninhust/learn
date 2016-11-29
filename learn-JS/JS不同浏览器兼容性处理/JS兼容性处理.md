# JS中的兼容性问题
## `ev.target`和`ev.srcElement`的兼容性
1. chrome中既有ev.target，也有ev.srcElement；
2. firefox中只有ev.target，没有ev.srcElement；
3. ie中只有ev.srcElement，没有ev.target；

所以处理浏览器兼容的问题的时候一般这样写：
```
var target=ev.srcElement?ev.srcElement:ev.target;
```
