const inquirer = require("inquirer");
const fs = require("fs");

//questions for user to answer about their project
    inquire
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
        prompt: "What are the installation instructions for your project?",
        answer: "installationInstructions",
    },
    {
        prompt: "What is the usage information for the project",
        answer: "usageInfo",
    },
    {
        type: "list",
        prompt: "What license would you like to use?",//do we put choices here? or not?
        answer: "licenseOptions",
        options: ['GNU GPLv3', 'MIT', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense'],
    },
    {
        message: 'What year and full name do you want to appear on your license? (format "yyyy First Last")',
        name: 'licenseInfo'
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
        prompt: "Lastly, how would you like to be contacted from a potential client?",
        answer: "contactInstructions"
    }

])


.then(answers => {
    //compile all the users answers
    const {title, description, technologies, installationInstructions, usageInfo, licenseOptions, licenseInfo, contribution, testInstructions, username, email, contactInstructions} = userAnswers

    let license = "";
    let badge = "";
    //license options
    switch (licenseOptions){
        case "GNU GPLv3" :
            license = `Copyright (c) ${licenseInfo} Licensed under the GNU GPLv3 license.`;
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case "MIT":
            license = `Copyright (c) ${licenseInfo} Licensed under the MIT license.`;
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Boost Software License 1.0":
            license = `Copyright (c) ${licenseInfo} Licensed under the Boost Software license.`;
            badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "Mozilla Public License 2.0":
            license = `Copyright (c) ${licenseInfo} Licensed under the Mozilla Public license.`;
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "Apache License 2.0":
            license = `Copyright (c) ${licenseInfo} Licensed under the Apache license.`;
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "The Unlicense":
            license = `Copyright (c) ${licenseInfo} Licensed under the Unlicense license.`;
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
    }
});
// function to write README file
function generateMarkdown(answers) {
    return `# ${title} ${badge} \n ${description} \n ## Table of Contents \n * [Installation Instructions](#Installation-Instructions) \n * [Instructions for Use](#Instructions-for-Use) \n * [Contribution Guidelines](#Contribution-Guidelines) \n * [Testing Instructions](#Testing-Instructions) \n * [Questions](#Questions) \n * [License](#License) \n ## Installation Instructions \n ${installationInstructions} \n ## Instructions for Use \n ${usageInfo} \n ## Contribution Guidelines  \n ${contribution} \n ## Testing Instructions \n ${testInstructions} \n ## Questions  \n * Github Username: ${username} \n * Email: ${email} \n * How to contact: ${contactInstructions} \n ## License \n ${license}`;
};

// function to initialize program
function init() {
    try {
        const userAnswers = await readmeQuestions();
        generateReadme(answers);
        writeToFile("README.md", generateReadme(answers));
    } catch (err){
        console.log(err);
    }

};

// function call to initialize program
init();
