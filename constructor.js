function cls(name , age){
    this.name = name;
    this.age = age;

    this.show = function(){
        console.log(this.name," ",this.age);
    }
}

let o1 = new cls("sandy",19); 
let o2 = new cls("sandep",45); 
o1.show()
o2.show()
// console.log();