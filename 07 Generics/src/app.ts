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
