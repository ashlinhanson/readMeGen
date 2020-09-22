// function to generate markdown for README
function generateMarkdown(data) {
  return 
  `## ${data.title}
    # ${data.license}

  ## Description 
    ${data.description}

  ## Technologies Used
    ${data.technologies}

  ## Table of Contents
    - [Installation](#installationIntructions)
    - [Usage](#usageInfo)
    - [Contributors](#contribution)
    - [Tests](#testInstructions)
    - [SpecialInstructions(#specialInstructions)



`;
}

module.exports = generateMarkdown;
