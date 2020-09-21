const inquirer = require("inquirer");
const fs = require("fs");

//questions for user to answer about their project
inquirer
.prompt([
    {
        prompt: "Let's create your README! What is the title of the project?",
        answer: "title",
    },
    {
        prompt: "What is the description of the project?",
        answer: "description",
    },
    {
        prompt: "What technologies were used to create this project?",
        answer: "technologies",
    },
    {
        prompt: "What is the table of contents for the project?",
        answer: "tableOfContents",
    },
    {
        prompt: "What are the installation instructions for your project?",
        answer: "installationInstructions",
    },
    {
        prompt: "What is the usage information for the project",
        answer: "usageInfo",
    },
    {
        prompt: "What is the license for the project?",//do we put choices here? or not?
        answer: "license",
    },
    {
        prompt: "What are the contribution guidelines for this project?",
        answer: "contribution",
    },
    {
        prompt: "What are the test instructions?",
        answer: "testInstructions",
    },
    {
        prompt: "What is your GitHub username?",
        answer: "username",
    },
    {
        prompt: "What is your email?",
        answer: "email",
    },
    {
        prompt: "Lastly, are there any special instructions you would like to add for the users?",
        answer: "specialInstructions"
    }

])

.then(answers => {
    //compile all the users answers
    const {title, description, technologies, tableOfContents, installationInstructions, usageInfo, license, contribution, testInstructions, username, email, specialInstructions} = userAnswers
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
