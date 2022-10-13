/*

    @Truthy
        []
        {}
        " "
        "sandy"
        10
        -10
        ()=>{}

    @Falsy
        null 
        undefined 
         0
        -0
        +0
        ""
*/

let check = (condition) => {
  condition ? console.log("i am a Truthy..") : console.log("i am falsey..");
};

check(" "); // false
check("sandy"); // true
check(undefined); // false
check(null); // false
check({}); // true
check([]); // true
check(0); // false
check(+0); // false
check(-0); // false
check(-10); // true
check(10); // true
check(() => {}); // true

// let a = { age: null };
// let b;
// let c;
// console.log(b === c); // true undefined === undefined

// if (a.age) {
//   console.log("i am truthy");
// } else {
//   console.log("i am falsy");
// }

// ans--> i am falsey

// let x = function () {};

// if (() => {}) {
//   console.log("i am a function..");
// } else {
//   console.log("i am a not function..");
// }
