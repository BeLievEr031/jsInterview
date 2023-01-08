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

let arr = [];
Object.keys(obj).forEach((key) => {
  arr.push([key, obj[key]]);
});
console.log(arr);
