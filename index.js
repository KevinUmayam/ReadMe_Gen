//inquire variable
var inquirer = require("inquirer");
//fs variable here
const fs = require("fs");

//readme creater function
const readMe = ({
  title,
  description,
  installation,
  usage,
  licence,
  contribution,
  test,
  email,
  url,
  qa,
}) =>
  `## ${title}

 ## Licence
 
${licence}

## Table of contents
 
1. [Licence](#licence)
 
2. [Description](#description)
 
3. [Usage](#usage)
 
4. [Contributing](#contributing)
 
5. [Tests](#tests)
 
6. [Questios](#questios)
 
## Description
 
${description}
 
## Usage
 
${usage}
 
## Installation
 
${installation}
 
## Contributing
 
${contribution}
 
## Tests
 
${test}
 
## Questios

Here are some common QA's:
${qa}
 
If you have any further question you can reach me here: ${email}
 
[My GitHub Repo](${url})
 
`;

inquirer
  //start prompt questions
  .prompt([
    //Input for title of your project
    {
      type: "input",
      message: "Enter the title of your project",
      name: "title",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    // Input for discription of your project
    {
      type: "input",
      message: "Enter a description of your project",
      name: "description",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
      //table of contents
    },
    //installation
    {
      type: "input",
      message: "Enter instructions for how to install your app",
      name: "installation",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    //How to use app
    {
      type: "input",
      Message: "Explain to your audience how they could use your app",
      name: "usage",

      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    {
      //license choices
      type: "list",
      message: "What license should your project have? ",
      name: "licence",
      choices: ["apache-2.0", "Boost_1.0", "BSD_3", "MIT", "ISC"],
      //make sure they answer something
    },
    {
      //contribution inputs
      type: "input",
      message: "What should the user know about contributing to the repo?",
      name: "contribution",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    {
      //test input
      type: "input",
      message: "What command can the user use to run a test?",
      name: "test",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    {
      //email input
      type: "input",
      message:
        "Write some frequently asked questions or Common bugs and their solution",
      name: "qa",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    {
      //email input
      type: "input",
      message: "What email can they use to reach you?",
      name: "email",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
    {
      //url to github repo
      type: "input",
      message: "Provide your github URL",
      name: "url",
      //make sure they answer something
      validate: function (answer) {
        if (answer.length < 1) {
          console.log("must provide an answer");
        } else {
          return true;
        }
      },
    },
  ])
  //answers below
  .then((answer) => {
    //switch statements to set badges for licence options
    switch (answer.licence) {
      case "apache-2.0":
        answer.licence =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Boost_1.0":
        answer.licence =
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "BSD_3":
        answer.licence =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "MIT":
        answer.licence =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      case "ISC":
        answer.licence =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      default:
        console.log(`error`);
    }

    console.table(answer);
    const contentPage = readMe(answer);
    //calling the readme creater functions
    fs.writeFile("READMe.md", contentPage, (err) =>
      err ? console.log(err) : console.log("success")
    );
  })
  //catch for errors
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
