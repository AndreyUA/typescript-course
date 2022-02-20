interface Person {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}

let user1: Person;

user1 = {
  name: "Andrey",
  age: 31,
  greet: function (phrase) {
    console.log(`I am ${this.name}, ${this.age} years. ${phrase}`);
  },
};

user1.greet("Hello!");
