let person = {
  name: "sandy",
  age: 19,
  address: {
    city: "boisar",
    dist: "palghar",
    flat: {
      flatNo: 7,
      bldNo: 2,
    },
  },
  fav: {
    game: "cricket",
    fruit: "apple",
  },
};

/* 
    @res
        {
            name:"sandy",
            age:19,
            address_city:"boisar",
            address_dist:"palghar"
        }
*/

const flattenObj = (obj) => {
  for (key in obj) {
    if (typeof person[key] === "object") {
      for (nkey in person[key]) {
        flattenObj(person[key]);
        obj[key + "_" + nkey] = person[key][nkey];
      }
      delete person[key];
    }
  }
};

flattenObj(person);

console.log(person);
