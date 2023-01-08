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

Object.freeze(obj); // now we can't delete or update keys

console.log(delete obj.address);
obj.name = "Baba";
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.isFrozen(obj));
/* {
  name: 'sandy',
  age: 19,
  address: { city: 'xyc', pin: 100100 },
  fav: { color: 'blue', fruit: 'lemon' }
}
{
  name: {
    value: 'sandy',
    writable: false,
    enumerable: true,
    configurable: false
  },
  age: { value: 19, writable: false, enumerable: true, configurable: false },
  address: {
    value: { city: 'xyc', pin: 100100 },
    writable: false,
    enumerable: true,
    configurable: false
  },
  fav: {
    value: { color: 'blue', fruit: 'lemon' },
    writable: false,
    enumerable: true,
    configurable: false
  }
} */
