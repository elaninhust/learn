# HTTP模块

http模块属于Nodejs中的核心模块。

## class类

1. http.Sever

  http服务器原型

2. http.IncomingMessage

  请求req的原型

3. http.ServerResponse

  相应res的原型

4. http.ClientRequest

  http客户端原型

## 引用http模块

```
const http=require('http');
```

## http服务器

创建一个http服务器，有以下2中方法：

1. http.createServer(...)

  该方法返回一个http.Server的实例，并自动监听这个实例的`request`事件；

  ```
  const server=http.createServer(function(req,res){
       res.writeHead(200,{
          'content-type':'text/html'
       });
       res.write('<h1>hello Ivan!</h1>')
       res.end();
   });

   server.on('error',function(err){
       console.log(err.message);
   })

   server.listen(2016);
  ```

2. new http.Server();

  通过`new`命令符创建并返回一个http服务器实例，需要手动添加`request`请求监听事件；

  ```
  const server=new http.Server();

   server.on('request',function(req,res){
       res.writeHead(200,{
          'content-type':'text/html'
       });
       res.write('<h1>hello Ivan!</h1>')
       res.end();
   });

   server.on('error',function(err){
       console.log(err.message);
   })

   server.listen(2016);
  ```

## http客户端

创建一个http客户端(即发起http请求)有以下几种方法：

1. http.request()

  方法返回一个http.ClientRequest的实例，并自动监听`response`事件。

  ```
  const option={
       host:'www.baidu.com'
   };

   const req=http.request(option,function(res){
       res.setEncoding('utf-8');
       res.on('data',function(data){
           console.log(data.toString());
       });
   });

   req.end();
  ```

  通过设置参数option的值，可以选择请求的方式，GET、POST或者其他。

2. new http.ClientRequest()

  通过`new`命令符来生成一个http.ClientRequest实例，但是需要手动添加`response`监听事件。

  ```
  const option={
       host:'www.baidu.com'
   };

   const req=new http.ClientRequest(option);

   req.on('response',function(res){
       res.setEncoding('utf-8');
       res.on('data',function(data){
           console.log(data.toString());
       });
   });

   req.end();
  ```

3. http.get();

  该方法是http.request()方法生成GET请求的一个简便方法，不需要手动执行`req.end()`;

  ```
  const option={
       host:'www.baidu.com'
   };

   const req=http.get(option,function(res){
       res.setEncoding('utf-8');
       res.on('data',function(data){
           console.log(data.toString());
       });
   })
  ```
