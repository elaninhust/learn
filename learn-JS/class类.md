# class类

## 基本语法

在ES2015的类语法中，原本的构造函数被类的constructor方法取代，而其余原本需要定义在prototype中的方法则可以直接定义在class内。

```
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}
```

需要注意的是，在类中定义的方法，都是带有作用域的普通函数，而不是箭头函数，方法内第一层所引用的this都是指向当前实例，如果实例方法内包含箭头函数，则引擎就会根据包含层级把箭头函数内引用的this所指向的实际对象一直向上搜索，直到到达一个函数作用域或者块级作用快为止，如果一直搜索到达了运行环境的最上层，就会被指向undefined.

## 继承语法

```
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

//继承Animal出一个Dog的类
class Dog extends Animal{
    constructor(name,age,type){
        super(name,age);   //将constructor中的this指向Dog的实例
        this.type=type;
    }
    getType(){
        return this.type;
    }
}
```

非常方便的是，ES2015的继承语法同样可以将以前使用构造函数模拟的类作为父类来继承。

值得注意的是，如果一个子类继承了一个父类，那么在子类的constructor构造函数中必须使用super()函数调用父类的构造函数后才能在子类的constructor构造函数中使用this，否则会报出`this is not defined`的错误，但是这个问题在除constructor构造函数意外的方法中并不会出现。
