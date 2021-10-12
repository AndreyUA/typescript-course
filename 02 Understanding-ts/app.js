// Unknown
var userInput;
var userName;
userInput = 6;
userInput = "Andrey";
if (typeof userInput === "string") {
    userName = userInput;
}
// Never
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
var result = generateError("An error occurred!", 500);
console.log(result);
