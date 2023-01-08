let fs = require("fs").promises;

let f1 = fs.readFile("./f1.txt");
let f2 = fs.readFile("./f2.txt");
let f3 = fs.readFile("./f3.txt");

function cb1(data) {
  console.log(data + "");
  return f2;
}

function cb2(data) {
  console.log(data + "");
  return f3;
}

function cb3(data) {
  console.log(data+"");
}

f1.then(cb1).then(cb2).then(cb3);
