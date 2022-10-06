let obj = {
    name:"sandy",
    age:19
}

function show(a,b){
    console.log(this.name +"  "+this.age);
    console.log(a+b);
    console.log(arguments);
}
Function.prototype.myBind = function(){
    let func = this;
    let allArg = Array.from(arguments);
    let obj = allArg[0];
    let arg = allArg.slice(1);
    obj.myFunc = func;
    return function(){
        let newArgs = Array.from(arguments);
        obj.myFunc(...arg,...newArgs);
    }
}

let nb = show.myBind(obj,4,9);
nb(4,5);


