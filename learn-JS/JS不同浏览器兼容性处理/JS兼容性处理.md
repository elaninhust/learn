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

## 判断浏览器是否为opera浏览器

```
isOpera= typeof opera !== 'undefinded' && opera.toString() === '[object Opera]';
```

## 获取元素样式以及清除元素样式兼容性处理

```
function getStyle(node, name){
  var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
  return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
};


function removeStyle(node, name){
   var s = node.style;
   if(s.removeProperty){
     s.removeProperty(name);
   } else {
     s.removeAttribute(name);
   }
};
```

## 阻止事件冒泡

```
e = e || window.event;
e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
```
