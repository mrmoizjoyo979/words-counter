#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("\n \t\t *1mr2joy6-Words-Counter*"));

let sentence = await inquirer.prompt([
    {
        name: "answer",
        type: "input",
        message: "\n Write a Sentence:",
    }
]);

let words = sentence.answer.trim().split(" ");

console.log(chalk.bold("\n Sentence Words:"));

console.log(words);

console.log(`\n The Total Words Count: ${chalk.redBright(words.length)}`);

console.log(chalk.yellowBright("\n \t\t Thanks for using our Application!!"));

console.log("-".repeat(70));
