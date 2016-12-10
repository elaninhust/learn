# JS中的兼容性问题

## `ev.target`和`ev.srcElement`的兼容性

1. chrome中既有`ev.target`，也有`ev.srcElement`；
2. firefox中只有`ev.target`，没有`ev.srcElement`；
3. ie中只有`ev.srcElement`，没有`ev.target`；

所以在做事件委托的时候处理浏览器兼容的问题一般这样写：

```
var target=ev.srcElement?ev.srcElement:ev.target;
//类似于判断不同浏览器；
```

## `addEventListener`和`attachEvent`的兼容性

- `addEventListener`兼容Chrome、FF、ie9++；并用`removeEventListener`移除监听事件；

- `attachEvent`兼容ie8--；并用`detachEvent`移除监听事件；
