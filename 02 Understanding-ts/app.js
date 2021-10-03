function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// console.log(printResult(add(5, 12)));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 6;
console.log(combineValues(8, 8));
