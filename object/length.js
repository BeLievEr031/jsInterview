let arr = [1, 2, 3, 4, 5];

console.log(arr.length);

//  finding the length of an object

let obj = {
  name: "sandy",
  age: 19,
  fav: "apple",
};

// console.log(obj.length); -> object does not have any length property

let objLen = Object.keys(obj).length;

console.log(objLen);
