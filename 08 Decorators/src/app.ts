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
const LoggerFactory = (logString: string) => {
  console.log("THIS IS @LoggerFactory");

  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
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
const WithTemplate = (template: string, hookId: string) => {
  console.log("THIS IS @WithTemplate");

  return (constructor: any) => {
    console.log("rendering a template");

    const hookElement = document.getElementById(hookId);

    const person = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;

      hookElement.querySelector("h1")!.textContent = person.name;
    }
  };
};

@WithTemplate("<h1>my person object</h1>", "app")
class AnotherPerson {
  name = "Andrey";

  constructor() {
    console.log("creating person object...");
  }
}
console.log("===============================");

// Multiple decorators
@LoggerFactory("MULTI DECORATOR")
@WithTemplate("<h1>my person object</h1>", "app")
class PersonWithMultiDecorators {
  name = "Andrey";

  constructor() {
    console.log("creating person object...");
  }
}
console.log("===============================");

// Property decorators
function LoggerProperty(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");

  console.log("Target: ");
  console.log(target);

  console.log("Property name: ");
  console.log(propertyName);
}
class Product {
  @LoggerProperty
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Accessor and parameter decorators
function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

console.log("===============================");

// Returning a class in a class decorator
const WithTemplateWithReturn = (template: string, hookId: string) => {
  console.log("THIS IS @WithTemplateWithReturn");

  return function <T extends { new (...args: Array<any>): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._args: Array<any>) {
        super();

        console.log("rendering a template");

        const hookElement = document.getElementById(hookId);

        if (hookElement) {
          hookElement.innerHTML = template;

          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
};

@LoggerFactory("MULTI DECORATOR")
@WithTemplateWithReturn("<h1>my person object</h1>", "app")
class PersonWithClassDecorators {
  name = "Andrey from PersonWithClassDecorators";

  constructor() {
    console.log("creating person object...");
  }
}

// Other decorator (autobind decorator)
function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);

      return boundFunction;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "Thiw works!";

  @Autobind
  showMessage(): void {
    console.log(this.message);
  }
}

const p = new Printer();

p.showMessage();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);
console.log("===============================");

// Validation decorator
interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: Array<string>;
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) return true;

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;

        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courceForm = document.querySelector("form")!;
courceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);

  if (!validate(createCourse)) {
    console.log("Invalid input, please try again!");

    return;
  }

  console.log(createCourse);
});
