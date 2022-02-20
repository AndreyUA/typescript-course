interface Greetable {
  name: string;
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
console.log(user1);
