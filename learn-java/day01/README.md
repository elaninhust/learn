## java语言平台

- J2SE
    + 其他两个平台的基础
- J2ME
    + 嵌入式开发，面向移动端设备开发
- J2EE
    + 主要针对于web应用程序开发
    + 浏览器访问

## java语言的跨平台性

- Java是跨平台的。（正确）
- JVM是跨平台的。（错误）

![java语言的跨平台性实现](http://osswol0lp.bkt.clouddn.com/17-7-9/50675714.jpg)

JVM:java虚拟机，不同的操作系统有对应不同的java虚拟机，即JVM,这样就保证了java语言的跨平台性。

## JRE和JDK

- JRE：java运行环境，其中包括JVM和Java程序所需的核心类库等
- JDK：Java开发工具包，包换了JRE

>一般来说，使用JDK来开发Java应用程序，交给JRE去完成，由JVM保证跨平台。

## 第一个Java程序

```java
class HelloWorld {
    public static void main(String[] args){
        System.out.println("hello world!");
    }
}
```

- 文件名和方法名（类名）保持一致
- Java语言是严格区分大小写的
- 单引号和双引号有区别

![Java应用程序的编译和运行](http://osswol0lp.bkt.clouddn.com/17-7-9/4350188.jpg)

## 环境变量

- path环境变量：任意路径下使用 `javac`和`java`命令，配合`JAVA_HOME`食用效果更佳（推荐）
- JAVA_HOME环境变量
- classpath环境变量：任意路径下使用某个.class文件（并没有什么卵用）
