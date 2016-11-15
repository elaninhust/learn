class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
    static extend(constructor,..._args){
        return class extends Animal{
            constructor(...args){
                super(..._args);
                constructor.call(this,...args);
            }
            getType(){
                console.log(this.type);
            }
        }
    }
}

const Dog=Animal.extend(function(type){
    this.type=type;
},'ivan',20);

let doge=new Dog('doge');

doge.getName();
doge.getAge();
doge.getType();

