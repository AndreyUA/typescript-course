class Department {
  public name: string;
  private employees: Array<string> = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Andrey");
accounting.addEmployee("Another Andrey");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: "AccountingCopy",
//   describe: accounting.describe,
// };

// accountingCopy.describe();
