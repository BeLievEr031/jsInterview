// console.log(Company); Hoisting...
// let Company = class{}
class Company {
  emplName;
  emplEmail;
  emplID;
  #emplSalary;

  constructor(name, email, id, salary) {
    this.emplName = name;
    this.emplEmail = email;
    this.#emplSalary = salary;
    this.emplID = id;
  }

  incrementSalary(amount) {
    this.emplSalary += amount;
  }

  updateEmail(email) {
    this.emplEmail = email;
  }

  showEmpl() {
    console.log(this);
  }
}

let ankul = new Company("Ankul chaturvedi", "a@gmail.com", 101, 125000);
// ankul.incrementSalary(200);

// ankul.updateEmail("b@gmail.com");

ankul.showEmpl();
