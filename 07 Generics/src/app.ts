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

// keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
): T[U] {
  return obj[key];
}

extractAndConvert({ name: "Andrey", age: 31 }, "name");

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Andrey");
textStorage.addItem("Kirill");
textStorage.addItem("Olya");
textStorage.addItem("TEST");
textStorage.removeItem("TEST");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(123);
numberStorage.addItem(78);
numberStorage.addItem(46);
console.log(numberStorage.getItems());
numberStorage.removeItem(78);
numberStorage.addItem(654);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const objForRemoveTest = { name: "Test name for remove" };
// objStorage.addItem({ name: "Andrey" });
// objStorage.addItem({ name: "Kirill" });
// objStorage.addItem({ name: "Olya" });
// objStorage.addItem(objForRemoveTest);
// objStorage.addItem({ name: "Test name for test" });
// objStorage.removeItem(objForRemoveTest);
// console.log(objStorage.getItems());

// Generic utility types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<Array<string>> = ["Test1", "Test2"];

// names.push("Test3");
// names.pop();
