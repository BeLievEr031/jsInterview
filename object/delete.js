let obj ={
    name:"sandy",
    age:19,
    show:function(){
        console.log(this.name," ",this.age);
    }
}

Object.freeze(obj)
console.log(delete obj.name);
// console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj);