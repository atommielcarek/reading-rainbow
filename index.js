const inquirer = require("inquirer");
const axios = require('axios').default;
const fs = require('fs');
const generate = require('./readmeMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What will this project be called?"
    },
    {
        type: "input",
        name: "badge",
        message: "Enter what type(s) of badges/headings you would like."
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description/user story affiliated with the project."
    },
    {
        type: "input",
        name: "installation",
        message: "How will is the application/package installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this application/package used?"
    },
    {
        type: "input",
        name: "license",
        message: "Provide a license or badge link for this project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributing parties?"
    },
    {
        type: "input",
        name: "test",
        message: "Provide any project tests"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github user name."
    },
    {
        type: "input",
        name: "repo",
        message: "Insert a link to the project's repository."
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("README file successfully created!");
          });
        });

});

function init() {

}

init();