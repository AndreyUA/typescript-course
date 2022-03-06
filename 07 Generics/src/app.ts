// const names: Array<string> = ["Andrey", "Max"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// Generic function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj1 = merge({ name: "Andrey", hobbies: ["sports"] }, { age: 31 });
const mergeObj2 = merge<{ name: string }, { age: number }>(
  { name: "Andrey" },
  { age: 31 }
);

console.log(mergeObj1.name);

// const mergeObjArrow = <T, U>(objA: T, objB: U) => ({ ...objA, ...objB });

// const testMergeObj = mergeObjArrow({ test1: "test" }, { test2: 456 });

console.log("----------------------------");
// Working with Constraints
const mergeObjArrow = <T extends object, U extends object>(
  objA: T,
  objB: U
) => ({ ...objA, ...objB });
const mergeObj3 = mergeObjArrow(
  { name: "Andrey", hobbies: ["sports"] },
  { name: 31 }
);

console.log(mergeObj3);
console.log("----------------------------");

// Generic function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionTest = "Got no value";

  if (element.length === 1) {
    descriptionTest = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionTest = `Got ${element.length} elements.`;
  }

  return [element, descriptionTest];
}

console.log(countAndDescribe("test"));
console.log(countAndDescribe(["test", "test", 789, 654, 12]));
console.log(countAndDescribe([]));
console.log(countAndDescribe([6]));
console.log("----------------------------");
