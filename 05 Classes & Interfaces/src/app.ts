class Department {
  static fiscalYear = 2022;
  //   private id: string;
  //   private name: string;
  protected employees: Array<string> = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("You need to pass a valid value");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: Array<string>) {
    super(id, "Accounting");

    this.lastReport = reports[0];
  }
  addEmployee(name: string): void {
    if ("Andrey" === name) {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);

    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Test empl");
console.log(employee1, Department.fiscalYear);

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

accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong...");

console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.addEmployee("Andrey");
accounting.addEmployee("Max");
accounting.printEmployeeInformation();
