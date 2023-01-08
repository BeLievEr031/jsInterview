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

// console.dir({});
// console.log("toString" in obj); -- true bcoz Object constructor have property toString

// Always use hasOwnProperty

// console.log(obj.hasOwnProperty("toString"));--> false now
console.log(obj.hasOwnProperty("name"));
