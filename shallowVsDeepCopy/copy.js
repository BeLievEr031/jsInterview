/*  @Direct copy

let fruits = ["mango", "papaya", "pear", "banana", "chickoo"];

let fruits2 = fruits;

fruits2[2] = "pineapple";

console.log(fruits);
console.log(fruits2);       
*/


/* @Shallow copy */

/* 
    @Methode one[1] spread operator
    
    let fruits = [
  "mango",
  "papaya",
  "pear",
  "banana",
  "chickoo",
  { special: "dragonfruits" },
];

let fruits2 = [...fruits];
fruits2[2] = "pineapple";
fruits2[5].special = "kiwi";

console.log("f1--> ", fruits);
console.log("f2--> ", fruits2);
*/

/* 
    @Methode two[2] Array.from()
    
    let fruits = [
    "mango",
    "papaya",
    "pear",
    "banana",
    "chickoo",
    { special: "dragonfruits" },
];

let fruits2 = Array.from(fruits);
fruits2[2] = "pineapple";
fruits2[5].special = "kiwi";
  
console.log("f1--> ", fruits);
console.log("f2--> ", fruits2);
*/

/* 
    @Methode three[3] [].slice(0)
    
    let fruits = [
        "mango",
  "papaya",
  "pear",
  "banana",
  "chickoo",
  { special: "dragonfruits" },
];

let fruits2 = fruits.slice(0);
fruits2[2] = "pineapple";
fruits2[5].special = "kiwi";

console.log("f1--> ", fruits);
console.log("f2--> ", fruits2);
*/

/* @Deep Copy*/

let fruits = [
  "mango",
  "papaya",
  "pear",
  "banana",
  "chickoo",
  { special: "dragonfruits" },
];

let fruits2 = JSON.parse(JSON.stringify(fruits));
fruits2[2] = "pineapple";
fruits2[5].special = "kiwi";

console.log("f1--> ", fruits);
console.log("f2--> ", fruits2);
