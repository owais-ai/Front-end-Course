import inquirer from "inquirer";
const actualPin = 4500;
let balance = 10000;
let yourPin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Please enter your 4 digit pin",
    },
]);
if (yourPin.pin === actualPin) {
    console.log("You are successfully logged in!");
    let options = await inquirer.prompt([
        {
            type: "list",
            name: "task",
            choices: ["Cash withdraw", "Balance inquiry"],
            message: "Please select an option to proceed",
        },
    ]);
    if (options.task === "Cash withdraw") {
        let amount = await inquirer.prompt([
            {
                type: "number",
                name: "money",
                message: "Please enter amount to withdraw",
            },
        ]);
        if (amount.money > balance) {
            console.log("Your balance is insufficient!");
        }
        else {
            console.log("Successfully withdraw Rs", amount.money);
            balance = balance - amount.money;
            console.log("Your new balance is Rs ", balance);
        }
    }
    else {
        console.log("Your balance is Rs", balance);
    }
}
else {
    console.log("Your pin is incorrect, please try again!");
}
