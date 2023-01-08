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

// for (key in obj) {
//   console.log(key);
// }

// for value

for (key in obj) {
  console.log(key, "-->", obj[key]);
}

console.log(obj.name);