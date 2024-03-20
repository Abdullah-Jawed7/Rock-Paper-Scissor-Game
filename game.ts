#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
  {
    message: "First Player; Please!  Select your move",
    type: "list",
    name: "fPlayerMove",
    choices: ["Rock", "Paper", "Scissor"],
  },
  {
    message: "Second Player; Please!  Select your move",
    type: "list",
    name: "sPlayerMove",
    choices: ["Rock", "Paper", "Scissor"],
  },
]);
if (result.fPlayerMove == result.sPlayerMove) {
  console.log("Its tie! play Again ");
}
 else if (
  (result.fPlayerMove == "Rock" && result.sPlayerMove == "Scissor") ||
  (result.fPlayerMove == "Paper" && result.sPlayerMove == "Rock") ||
  (result.fPlayerMove == "Scissor" && result.sPlayerMove == "Paper")
) {
  console.log(" WOW!First player wins game");
} else {
  console.log("WOW! Second player wins game");
}
