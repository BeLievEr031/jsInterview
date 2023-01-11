function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.role = "FullStackDeveloper";

function SavingAcc(name, amount) {
  BankAccount.bind(this, name, amount);
}

let sandy = new BankAccount("Sandeep Rajak", 2000);
sandy.role = "SDE"
console.log(sandy.role);
let subbu = new SavingAcc("Subasini Rajak", 2000);
subbu.role = "CA"
console.log(sandy);
console.log(subbu);
console.log(subbu.role);
