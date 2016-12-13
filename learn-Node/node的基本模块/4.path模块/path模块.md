# PATH模块

## PATH模块的引入

```
const path=require('path');
```

## 路径相关的操作

1. path.normalize(...); 路径解析，得到规范化的路径格式

2. path.join(path1,path2,...); 路径的合并，路径最后不带有`.`、`..`等目录分隔符

3. path.resolve(path1,path2,...); 获得绝对路径

  从右往左逐渐解析，当碰到绝对路径时就返回。当参数中的所有路径没有绝对路径时，返回的结果自动加上__dirname的路径。

  ```
  path.resolve('/ivan','/elan','index.html'); //'/elan/index.html';
  path.resolve('/ivan','elan','index.html');   //'/ivan/elan/index.html';
  path.resolve('ivan','elan','index.html');   //__dirname+'/ivan/elan/index.html';
  ```

4. path.relative(from,to); 获得从from到to的相对路径,其中from和to最好的绝对路径。

  ```
  path.relative('/ivan/www/index.html','/ivan/style/main.css');   //'../../style/main.css'
  path.relative('/ivan/www','/ivan/www'); //返回字符串''
  ```

5. path.isAbsolute(path) 判断一个路径为绝对路径。

6. path.parse(...)和path.format(...);

```
path.parse('/home/user/dir/file.txt');

{ root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' }

path.format({ root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' });

'/home/user/dir/file.txt'
```

## 相对于文件的操作

1. path.basename(path[, ext]); 获取文件名，通过设置ext参数可以返回文件后缀名；

  ```
  path.basename('/ivan/elan/index.html'); //'index.html'
  path.basename('/ivan/elan/index.html','.html'); //'index'
  ```

2. path.extname(path); 获取文件的后缀名；

3. path.dirname(path); 返回文件的所在目录名；

  ```
  path.dirname('/ivan/www/index.html');   //'/ivan/www'
  ```

## path模块的常用属性

1. path.sep 返回文件分割符，window是'\', Unix是'/';

2. path.delitimer 返回目录分隔符，window是';', Unix中是':';
