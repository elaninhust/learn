# querystring 序列化和反序列化、转译和反转译模块

queryatring模块主要用来出了参数对象，用起来还是不叫方便和顺手的。其中包含有四个方法：

- querystring.stringify() 序列化
- querystring.parse() 反序列化
- querystring.escape() 转译
- querystring.unescape() 反转译

## querystring的引用

在项目中用querystring模块之前需要引入此模块。

```
const querystring=require('querystring');
```

## querystring.stringify() 序列化

可以接受对个参数，具体用法看下面例子：

```
querystring.stringify({name:'ivan',age:20})     默认
'name=ivan&age=20'

querystring.stringify({name:'ivan',age:20},',')     //用,分隔
'name=ivan,age=20'

querystring.stringify({name:'ivan',age:20},',',':')     //key和value之间用:分隔
'name:ivan,age:20'
```

## querystring.parse() 反序列化

用法和querystring.stringify()相反。

```
querystring.parse('name=ivan&age=20')
{ name: 'ivan', age: '20' }

querystring.parse('name=ivan,age=20',',')
{ name: 'ivan', age: '20' }

querystring.parse('name:ivan,age:20',',',':')
{ name: 'ivan', age: '20' }
```

## querystring.escape()转译和querystring.unescape()反转译

```
querystring.escape('谭帆')    //转译
'%E8%B0%AD%E5%B8%86'

querystring.unescape('%E8%B0%AD%E5%B8%86')      //反转译
'谭帆'
```
