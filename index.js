const inquirer = require("inquirer");

inquirer
    .prompt([
    {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
    },
    {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
    },
    {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
    },
    {
    type: 'confirm',
    message: "Do you like Tacos?",
    name: 'likeTaco'
    },
    {
    type: 'checkbox',
    message: "What Star Trek languages do you know?",
    choices: ["Clingon", "Human", "Vulcan"],
    name: "sheldonParameter"
    }
])
.then((response) => {
    console.log({response});

    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!');
  });
