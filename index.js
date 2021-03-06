const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//const generateReadme = require("./utils/generateReadme");
promptUser();
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your name?",
      },

      {
        type: "input",
        name: "github",
        message: "What is your GitHub Username?",
      },

      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Explain a bit about your project",
      },

      {
        type: "input",
        name: "installation",
        message: "Explain installation instructions",
      },
      {
        type: "input",
        name: "usage",
        message: "What is your project used for?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Email?",
      },
      {
        type: "list",
        name: "license",
        message: "Chose appropiate license",
        choices: ["GNU", "ISC", "MIT", "Mozilla"],
      },
    ])
    .then((data) => {
      const secondreadme = `${data.title.toLowerCase().split(" ").join("")}.md`;
      createFile(secondreadme, createMD(data));
      console.log(data);
    });
}

function createFile(file, data) {
  fs.writeFileSync(path.join(process.cwd(), file), data);
  console.log("Success!");
}

function createMD(data) {
  // return
  //Adding licences and their function?
  //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  //[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  return `
## Name
  ${data.title}
## Table of contents
* [github](#github)
* [projectName](#projectName)
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [email](#email)
* [license](#license)
## github
${data.github}

## projectName
${data.projectName}

## description
${data.description}

## installation
${data.installation}

## usage
${data.usage}

## email
${data.email}

## license
${data.license}`;
}
