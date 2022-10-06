let x;
var z = 10;
this.name = "appple"
console.log(x);
x = 12;
console.log(x);

 function y() {

  console.log(a);
  var a = 10;
  console.log(a);

  function z(){
    console.log(this.name);
  }

  z();
};

y();
