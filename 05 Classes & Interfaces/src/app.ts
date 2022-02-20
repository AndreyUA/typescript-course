// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  age: number;
  greet: (phrase: string) => void;
}

class Person implements Greetable {
  name: string;
  age: number = 31;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`I am ${this.name}, ${this.age} years. ${phrase}`);
  }
}

let user1: Greetable;

user1 = new Person("Andrey");

user1.greet("Hello!");

user1.age = 21;
user1.greet("Hello!");

console.log(user1);
