// Unknown
let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Andrey";

if (typeof userInput === "string") {
  userName = userInput;
}

// Never
function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };

  // while (true) {
    
  // }
}

// const result = generateError("An error occurred!", 500);

// console.log(result);
