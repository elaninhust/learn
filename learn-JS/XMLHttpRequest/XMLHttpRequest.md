# XMLHttpRequest

`XMLHttpRequest`标准分为`level 1`和`level 2`。

`XMLHttpRequest level1`只要存在以下缺点：

1. 同源策略的限制，不能发送跨域请求。
2. 只能发送纯文本数据，不能发送二进制文件（比如图片、视频、音频等）。
3. 无法实时获取进度信息。

`XMLHttpRequest level2`有如下改进功能：

1. 可以发送跨域请求。
2. 支持发送和接收二进制数据。
3. 新增formData对象。
4. 可以实时获取进度信息。
5. 可以设置请求的超过时间。
