// console.log(a); // Can't access before initialization bcoz it is in TEMPORAL Dead zone
// let a = 45;
// console.log(a);

// console.log(a); // give undefined due to the HOIST
// var a = 54;
// console.log(a);

// console.log(b); // give B--> is not defined

// @null
// for null in we have to mark it explicitly NULL
// @e.g

// let obj = {
//   name: "sandy",
//   age: null,
// };
// console.log(obj.age);

// @examples

// console.log({a:45}.a);

console.log(global.x); //undefined
// console.log(a);// not defined

// console.log(x); // temporal dead zone

let x = {
  age: 31,
};

console.log(z); // undefined hoisting

var z = {
  name: "sandy",
};
console.log(x.pi); //undefined

console.log("----->", y); // -----> undefined hosting

var y = function () {
  // function are a first class citizen in javascript
};
console.log("----->", y); //[function:y]

console.log(y()); // undefined bcoz its can not returning any thing


