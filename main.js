#! usr/bin/env node
import inquirer from "inquirer";
//OOP Introduction Explained with a TypeScript Console
class person {
    respon;
    constructor(a) {
        this.respon = a;
    }
    personality() {
        if (this.respon == 1) {
            console.log("\nYou are: Extravert");
        }
        else {
            console.log("\nYou are: Introvert");
        }
    }
}
class student {
    response;
    constructor(n) {
        this.response = n;
    }
    Mystery() {
        console.log(`Your name is ${this.response} and your personality is Mystery.`);
    }
}
let answer = await inquirer.prompt({
    name: "In",
    type: "number",
    message: "\nType 1 If you like to talk to others and Type 2 If you would rather keep to yourself:",
    validate: (input) => {
        if (isNaN(input)) {
            return " invalid number";
        }
        else if (input == "") {
            return "you have to give input";
        }
        else {
            return true;
        }
    }
});
let num = answer.In;
let val = new person(num);
val.personality();
let ans = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is your name:",
    validate: (input) => {
        if (Number(input)) {
            return "write your name correcetly.";
        }
        else if (input == "") {
            return "fill this line.";
        }
        else {
            return true;
        }
    }
});
let num2 = ans.name;
let val2 = new student(num2);
val2.Mystery();
