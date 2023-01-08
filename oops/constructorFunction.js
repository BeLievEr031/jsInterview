function Bank(cName, amount) {
  this.ac = Date.now();
  this.name = cName;
  this.amount = amount;
}

// Constructor level prototyping
{
  Bank.prototype.addAmount = function (amount) {
    this.amount += amount;
  };

  Bank.prototype.withdraw = function (amount) {
    if (amount > this.amount) {
      console.log("insufficient balance..");
      return;
    }

    this.amount -= amount;
  };
}

// Object level Prototyping
{
  Object.prototype.showBalance = function () {
    console.log(this.name, "has amount: ", this.amount);
  };

  Object.prototype.acNumber = function () {
    console.log("Your A/C number is: ", this.ac);
  };
}

let ankul = new Bank("Ankul", 1000);
let anish = new Bank("Anish", 2000);

console.log(ankul instanceof Bank);

console.log("Before add amount: ");
ankul.showBalance();

ankul.addAmount(1000);
ankul.addAmount(120);
ankul.addAmount(150);
console.log("After adding--> ", ankul);

ankul.withdraw(70);
console.log("After withdraw", ankul);

ankul.showBalance();
ankul.acNumber();

anish.addAmount(400);
console.log("After adding--> ", anish);

anish.showBalance();
anish.acNumber();
