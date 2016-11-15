const Animal=class{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    getName(){
        console.log(this.name);
    }
}

const Cat=class extends Animal{
    constructor(...args){
        super(...args);
        this.type='cat';
    }
    getType(){
        console.log(this.type);
    }
}


let cat1=new Cat('elan',32);
cat1.getName();
cat1.getType();
console.log(cat1);