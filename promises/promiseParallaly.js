let fs = require("fs");

let f1 = fs.promises.readFile("./f1.txt");
let f2 = fs.promises.readFile("./f2.txt");
let f3 = fs.promises.readFile("./f3.txt");

// console.log(f1);

f1.then(cb1);
f2.then(cb2);
f3.then(cb3);


function cb1(data) {
  console.log(data + "");
}

function cb2(data) {
  console.log(data + "");
}

function cb3(data) {
  console.log(data + "");
}
