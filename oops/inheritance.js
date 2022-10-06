// --> AnkulBaba bank---> cant give loan
// --> AnishBaba bank--->  give loan

class AnkulBaba {
  cName;
  ac;
  #amount; // Private variable to stop user to add String or any value from out-side;

  constructor(cname, amount) {
    this.ac = Date.now();
    this.cName = cname;
    this.#amount = amount;
  }

  set updateBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount should be number");
    }
    this.#amount = amount;
  }

  get balance() {
    console.log(this.#amount);
  }

  set deposite(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount should be number");
    }
    this.#amount += amount;
  }

  set withdraw(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount should be number");
    }
    this.#amount -= amount;
  }
}

let suyash = new AnkulBaba("suyash", 2000);

suyash.deposite = 5000;
console.log("before withdraw", suyash);

suyash.withdraw = 10;
console.log(suyash);

class AnishBaba extends AnkulBaba {
  #loanamount = 0;
  #activeLoan = 0;
  constructor(cname, amount) {
    super(cname, amount);
  }

  #calcInterest(amount) {
    let interset = (amount * 10) / 100;
    return interset;
  }

  set loan(amount) {
    this.#loanamount = amount;
    this.#activeLoan = this.#loanamount + this.#calcInterest(amount);
  }

  get loanDetails() {
    console.log(this.cName,"has loan amount: ",this.#activeLoan);
  }
}

let jagdish = new AnishBaba("jagdish", 5000);
console.log(jagdish);

jagdish.loan = 100;
console.log(jagdish);

let jhon = new AnishBaba("Jhon",4000)

console.log(jhon);

jhon.loan = 2000
jhon.loanDetails
