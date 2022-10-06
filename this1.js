let obj = {
  name: "sandy",
  age: 19,
  myFun:function fun(){

  }
};

function show(a,b,c) {
  console.log(this.name + "  " + this.age);
  console.log(a+b+c);
}

// show.call(obj, 1,2,4);

Function.prototype.myCall = function () {
    let fun = this;
    let arg = Array.from(arguments);
    let actObj = arg[0];
    let args = arg.slice(1);

    actObj.myFun = fun;
    actObj.myFun(...args[0]);
};

show.myCall(obj, [1,1,1]);
