const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is licensed under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions about this project or have any ideas for improvement, please contact me directly at ${data.email}. You can view this and more of projects I've worked on at https://github.com/${data.github}.
`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;