class Bank {
  name;
  ac;
  password;
  #amount;

  constructor(name, amount, password) {
    this.name = name;
    this.#amount = amount;
    this.ac = Date.now();
    this.password = password;
  }

  set addAmount(amount) {
    this.#amount += amount;
  }

  get getAmount() {
    return this.#amount;
  }
}

let ankul = new Bank("Ankul", 5000, 123);

ankul.addAmount = 450;

console.log(ankul);
