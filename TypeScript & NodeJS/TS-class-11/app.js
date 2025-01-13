function hello() {
    console.log("Hello Pakistan!");
}
hello();
// A function with parameters
function printName(name) {
    if (name === void 0) { name = "Khan"; }
    console.log("Hello", name, "How are you today?");
    console.log("Hi ".concat(name, ", how are you today?"));
}
printName("Owais");
printName("Anus");
function addNum(num1, num2) {
    console.log(num1 + num2);
}
addNum(10, 5);
function calculator(a, b, opearation) {
    if (opearation == "addition") {
        console.log(a + b);
    }
    else if (opearation == "subtract") {
        console.log(a - b);
    }
    else if (opearation == "multiply") {
        console.log(a * b);
    }
    else if (opearation == "divide") {
        console.log(a / b);
    }
}
calculator(10, 2, "multiply");
// Function with default parameter
function adNum(a, b) {
    if (b === void 0) { b = 4; }
    console.log(a + b);
}
adNum(40);
adNum(40, 50);
// function with optional parameter
function optionalPara(name) {
    if (name) {
        console.log("Hello", name);
    }
    else {
        console.log("Hello Unknown person");
    }
}
optionalPara();
optionalPara("Ali");
// Arrow function
var subNum = function (a, b) {
    console.log(a - b);
};
subNum(10, 5);
