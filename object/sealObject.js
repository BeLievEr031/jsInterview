let obj = {
  name: "sandy",
  age: 19,
  address: {
    city: "xyc",
    pin: 100_100,
  },
  fav: {
    color: "blue",
    fruit: "lemon",
  },
};

// console.log(Object.getOwnPropertyDescriptors(obj));
Object.seal(obj);

// obj.name = "TYIT"; can work
// obj.std = "TYIT"; can;t work

// console.log(delete obj.name);

console.log(obj);
console.log(Object.isSealed(obj));
// console.log(Object.getOwnPropertyDescriptors(obj));
