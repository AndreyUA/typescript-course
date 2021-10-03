function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// console.log(printResult(add(5, 12)));
function test() {
    try {
        return 1;
    }
    finally {
        return 2;
    }
}
console.log(test());
