class Department {
  //   private id: string;
  //   private name: string;
  private employees: Array<string> = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}: ${this.name})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: Array<string>) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: Array<string>) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Admin"]);

it.addEmployee("Andrey");
it.addEmployee("Another Andrey");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = {
//   name: "AccountingCopy",
//   describe: accounting.describe,
// };

// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
