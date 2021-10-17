// const userName = "Andrey";

// let age = 30;
// age = 31;

// function add(a: number, b: number) {
//   let result;

//   result = a + b;

//   return result;
// }

// if (age > 20) {
//   var isOld = true;
// }

// Will work in valilla JS
// console.log(isOld);

// const add = (a: number, b: number = 10) => a + b;

// // console.log(add(4, 2));

// const printOutput: (a: number | string) => void = output =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", event => {
//     console.log(event);
//   });
// }

// printOutput(add(4, 2));
// printOutput(add(3));

// const hobbies = ['Sports', 'Programming'];
// const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const person = {
  firstName: "Andrey",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: Array<number>) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(5, 10, 6, 13);

// const add = (...numbers: [number, number, number]) => {
//   return numbers.reduce((currentResult, currentValue) => {
//     return currentResult + currentValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 6);

console.log(addedNumbers);

const hobbies = ["Sports", "Programming"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
