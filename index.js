const fs = require('fs'); 
const inquirer = require('inquirer'); 

const generatePage = require('./generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: "Please enter your Github user name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!!!");
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address!",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email address!!!");
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: "Please enter your project name!",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project name!!!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a brief description/user story affiliated with the project!",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide a brief description/user story affiliated with the project!!!");
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("What kind of license should your project have?!?!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: "What are the steps required to install your project?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("What are the steps required to install your project?!?!?");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "How is this app used?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a description!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: "What command input should be used to run tests?",
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: "What does the user need to know about contributing to the repo?"
    }
]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log("Your README has been created successfully !")
        }
    })
}; 

questions()
// retrieves user answers 
.then(answers => {
    return generatePage(answers);
})
// displays data to page
.then(data => {
    return writeFile(data);
})
// catches errors 
.catch(err => {
    console.log(err)
})