import inquirer from "inquirer";
let question = await inquirer.prompt([
    {
        type: "number",
        name: "Number1",
        message: "Enter first number",
    },
    {
        type: "number",
        name: "Number2",
        message: "Enter second number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select operation to perform",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (question.operation == "Addition") {
    console.log(question.Number1 + question.Number2);
}
else if (question.operation === "Subtraction") {
    console.log(question.Number1 - question.Number2);
}
else if (question.operation === "Multiplication") {
    console.log(question.Number1 * question.Number2);
}
else if (question.operation === "Division") {
    console.log(question.Number1 / question.Number2);
}
