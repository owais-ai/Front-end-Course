import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
let guessNumber = await inquirer.prompt([
    {
        type: "number",
        name: "gnumber",
        message: "Guess a number between 0 and 10",
    },
]);
if (guessNumber.gnumber === randomNumber) {
    console.log("Your guessed number is correct. You WIN!!!");
}
else {
    console.log("Sorry, your guess number is incorrect. Try Again!!!");
    console.log("The correct number is ", randomNumber);
}
