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
