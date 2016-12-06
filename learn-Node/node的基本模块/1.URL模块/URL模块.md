# URL模块

URL模块是用来处理url的一个比较常用的模块，包含有一下三个方法：

- url.parse()方法
- url.format()方法
- url.resolve()方法

下面会逐一介绍这三个常用方法。

## 引入URL模块

在项目中使用URL模块之前需要引入URL模块；

```
var url=require('url');
```

## URL地址和URL对象

一个常见的URL地址如下：`http://user:pass@host.com:8080/p/a/t/h?query=string#hash`;这个URL地址经过url.parse()方法后会返回一个URL对象。

```
http://user:pass@host.com:8080/p/a/t/h?query=string#hash

Url {
    protocol: 'http:',
    slashes: true,
    auth: 'user:pass',
    host: 'host.com:8080',
    port: '8080',
    hostname: 'host.com',
    hash: '#hash',
    search: '?query=string',
    query: 'query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
    href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
}
```

## url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

将一个URL转化成一个URL对象；可以接受3个参数；

1. urlString：URL地址，必需；
2. parseQueryString：true/false，可选，默认为false，当取值为true时，生成的URL对象中url.query取值是一个JSON对象；
3. slashesDenoteHost：true/false，可选，默认为false，当取值为true时，urlString中字符`//`和第一个字符`/`之间的字符就会被解析为host，当传入的urlString没有指定协议时也能正确解析urlString。

  ```
  url.parse('//host.com:8080/p/a/t/h?query=string#hash',false,true)

  Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: '//host.com:8080/p/a/t/h?query=string#hash'
  }
  ```

## url.format(urlObject)

url.parse()方法的反作用，将一个URL对象转换为URL地址。

## url.resolve(from,to)

将两个URL拼接在一起。

```
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```
