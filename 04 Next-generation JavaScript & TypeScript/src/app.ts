const userName = "Andrey";

let age = 30;
age = 31;

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

const add = (a: number, b: number = 10) => a + b;

// console.log(add(4, 2));

const printOutput: (a: number | string) => void = output =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => {
    console.log(event);
  });
}

printOutput(add(4, 2));
printOutput(add(3));
