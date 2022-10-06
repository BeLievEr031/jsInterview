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

/*** agar amount public rahega to 
 * @ankul.amount = "phone"
 * @ankul ke andar ke amount me hum @String dal sakate he
 * ***/
ankul.addAmount = 450;

console.log(ankul);
