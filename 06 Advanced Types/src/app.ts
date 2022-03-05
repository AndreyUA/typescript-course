// Intersection types
type Admin = {
  name: string;
  privileges: Array<string>;
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Andrey",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type guards

const add = (a: Combinable, b: Combinable): string | number => {
  if ("string" === typeof a || "string" === typeof b) {
    return a.toString() + b.toString();
  }

  return a + b;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);

  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ("startDate" in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
};

printEmployeeInformation(e1);
console.log("--------------------------");
printEmployeeInformation({
  name: "Admin",
  privileges: ["shut down the server"],
});
console.log("--------------------------");
printEmployeeInformation({
  name: "Employee",
  startDate: new Date(),
});
console.log("--------------------------");

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
console.log("--------------------------");
useVehicle(v2);
console.log("--------------------------");

// Discriminated unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving at speed: ${speed}`);
};

moveAnimal({ type: "bird", flyingSpeed: 60 });
console.log("--------------------------");
moveAnimal({ type: "horse", runningSpeed: 65 });
console.log("--------------------------");

// Type casting

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user_input")
// );
const userInputElement = document.getElementById(
  "user_input"
) as HTMLInputElement;

userInputElement.value = "Hi there!";

// Index properties

interface ErrorContainer {
  /*
  FOR EXAMPLE:
  {
    email: 'Not a valid email',
    username: 'Must start wit a character'
  }
  */

  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// Function overload

type CompareType = string | number;

function newAdd(a: number, b: number): number;
function newAdd(a: string, b: string): string;
function newAdd(a: number, b: string): string;
function newAdd(a: string, b: number): string;
function newAdd(a: CompareType, b: CompareType): CompareType {
  if ("string" === typeof a || "string" === typeof b) {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result1 = newAdd(1, 5);
const result2 = newAdd("Test", "Message");

// Optiona chaining
const fetchUserData = {
  id: "u1",
  name: "Andrey",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchUserData?.job?.title);
console.log("--------------------------");

// Nullish coalescing
const userInput = "";

const storedData = userInput ?? "DEFAULT";

// NOT null OR undefined
console.log("Nullish coalescing: ", storedData);
