let fs = require("fs");

let f1 = fs.readFile("callback\\f1.txt", cb1);

function cb1(err, data) {
  console.log(data + "");
  let f2 = fs.readFile("callback\\f2.txt", cb2);
}

function cb2(err, data) {
  console.log(data + "");
  let f3 = fs.readFile("callback\\f3.txt", cb3);
}

function cb3(err, data) {
  console.log(data + "");
}
