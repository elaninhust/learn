function currying(fn,...args){
    if(fn.length>args.length){
        return function(...rest){
            return currying(fn,...(args.concat(rest)));
        }
    }
    return fn.call(null,...args);
}

const f=(a,b,c)=>a+b+c;

const g=currying(f,1);
console.log(g(2,3));

const g1=currying(f,1,2);
console.log(g1(3));

const g2=currying(f);
console.log(g2(1)(2)(3));


cat={
    name:'ivan',
    age:12
};

const getName=function(){
    console.log(this.name);
}.bind(cat);

getName();



if(!function(){}.bind){
    Function.prototype.bind=function(context,...args){
        const self=this;
        return function(){
            return self.call(context,...args);
        }
    };
}







