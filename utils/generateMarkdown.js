// TODO: Create a function that returns a license badge based on which license is passed in
const mit = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`

const apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

const isc = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`

module.exports.mit = mit;
module.exports.apache = apache;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}

  ## User Story
  ${data.userstory}

  ## License
  ${mit}
  

  ## Questions
  For any questions do not hesitate to reach out,
  Contact me:
  On Github: [${data.username}](https://github.com/Drabis) \n
  Via Email: [${data.email}](drabo.aboulaye88@gmail.com)

`;
}

module.exports = generateMarkdown;
