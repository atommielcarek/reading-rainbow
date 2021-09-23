// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
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

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been created successfully !")
        }
    })
}; 

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})