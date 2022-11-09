# EMPLOYEE TRACKER
![Github licence](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
This command line application allows a user to store employee information in a mySQL database. The application uses Inquirer and Node.js to prompt user to enter employee's name, job role, and reporting manager. Job roles and assigned managers are kept in mySQL tables along with each role's department and salary. The user may update existing employees, reassign managers, and add new roles and departments. Additional functions include viewing department budgets (sum of salaries for employees assigned to department) as well as delete employees and departments when no longer needed.

#
## Table of Contents
- [Installation](#installation)
- [Github Repository](#github-repo)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Screencastify-Link](#screencastify)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

#
## Installation
<a id="installation"></a>
User will need to have Node.js and mySQL installed to run application. Clone YogiBruce's "employeeTracker" repository from GitHub to local drive. From the command line; run "mysql -u root -p" then "source db/schema.sql". If user would like to see pre-installed employees, they may also run "source db/seeds.sql".  Once dependencies are installed and mySQL has been started, the user can initiate application by running "node index.js" from the command line.

### GitHub Repository
<a id="github-repo"></a>
You may clone this repo to begin using application: [GitHub repo](https://github.com/YogiBruce/employeeTracker)

<a id="Screenshot"></a>
<img src="assets\employee-tracker-gif.gif" width="500px"/>

#
## Usage
<a id="usage"></a>
User will need to run "npm start" or "node index.js" from the command line to begin application. The user will then be prompted to first enter information for their Team Manager. The user will then be able to enter information for employees as either an "Engineer" or "Intern". When user has completed entering all employees, an HTML file will then be generated to the local distribution folder. This HTML file will provide user with their full team's information in an easy to read layout. The page will also provide live links so user may email an employee directly or view an engineer's GitHub profile.

### Screencastify
<a id="screencastify"></a>

Follow this link to view walk-through video of application: [Google Drive](https://drive.google.com/file/d/1IUN5gQMWFec1_Y1tWvkCjNGf6nmx0L9u/view?usp=share_link)

#
## Tests
<a id="tests"></a>
There are no tests for this application. All data is validated through Inquirer at input.


#
## License
<a id="license"></a>

#### MIT License [vist link](https://choosealicense.com/licenses/mit/)
Copyright 2022 - Robert B Arnold Jr

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


#
## Questions?
<a id="questions"></a>
For any questions regarding this application or any other project by YogiBruce:

### Email: [Gmail](da.bruce.jr@gmail.com)

### Gihub Profile: [YogiBruce](https://github.com/YogiBruce) 