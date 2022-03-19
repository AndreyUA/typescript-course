// First decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Andrey";

  constructor() {
    console.log("creating person object...");
  }
}

const person = new Person();

console.log(person);
console.log("===============================");

// Decorator factory
const LoggerFactory = (logString: string) => (constructor: Function) => {
  console.log(logString);
  console.log(constructor);
};

@LoggerFactory("LOGGING - PERSON")
class PersonForFactory {
  name = "Andrey";

  constructor() {
    console.log("creating person object...");
  }
}

const personForFactory = new Person();

console.log(personForFactory);
console.log("===============================");

// More decorators
const WithTemplate =
  (template: string, hookId: string) => (constructor: any) => {
    const hookElement = document.getElementById(hookId);

    const person = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;

      hookElement.querySelector("h1")!.textContent = person.name;
    }
  };

@WithTemplate("<h1>my person object</h1>", "app")
class AnotherPerson {
  name = "Andrey";

  constructor() {
    console.log("creating person object...");
  }
}
console.log("===============================");
