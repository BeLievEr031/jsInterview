const obj1 = {
  name: "sandeep",
};

const obj2 = {
  surname: "rajak",
  age: "20",
  favColor: "blue",
};

obj1.__proto__ = obj2;

// console.log(obj1.age);

// for (let key in obj1) {
//   console.log(obj1[key]);
// }

function Me() {
//   this.name = name;
}

Me.prototype = obj2;

// let sandy = new Me("sandeep Rajak");

console.log(Me.prototype.constructor == Object);

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

// console.log(Rabbit.prototype.constructor == Rabbit);
