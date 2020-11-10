const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const util = require('util');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const writeFileAsync = util.promisify(fs.writeFile);

const employees = []

const addEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager',]
        },
        {
            name: 'id',
            message: 'What is your id?'
        },
        {
            name: 'email',
            message: 'What is your email address?'
        },
        {
            name: 'github',
            message: 'What is your github username?'
        }
  ])
  .then(data => {
    const employee = new Engineer(data.name, data.role, data.id, data.email, data.github);
    employees.push(employee)
    console.log("Succesfully added the Engineer!")
    askToAddEmployee()
  })
  .catch(err => console.log(err));
};

const addIntern = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager',]
        },
        {
          name: 'id',
          message: 'What is your id?'
        },
        {
            name: 'email',
            message: 'What is your email address?'
        },
        {
            name: 'school',
            message: 'What school do you attend?'
        }
    ])
    .then(data => {
        const employee = new Intern(data.name, data.role, data.id, data.email, data.school);
        employees.push(employee)
        console.log("Succesfully added the Intern!")
        askToAddEmployee()
      })
      .catch(err => console.log(err));
};

const addManager = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager',]
        },
        {
          name: 'id',
          message: 'What is your id?'
        },
        {
            name: 'email',
            message: 'What is your email address?'
        },
        {
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ])
    .then(data => {
        const employee = new Manager(data.name, data.role, data.id, data.email, data.officeNumber);
        employees.push(employee)
        console.log("Succesfully added the Manager!")
        askToAddEmployee()
      })
      .catch(err => console.log(err));
};

const askToAddEmployee = () => {
   inquirer.prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Would you like to add an employee"
        }
    ])
    .then(val => {
        if (val.choice) {
            addEmployee();
        } 
        else {
            console.log("Your team is being created!")
            render(employees);
        }
    });
}

const addEmployee = () => {
    inquirer.prompt([
      {
          type: 'list',
          message: 'What kind of employee would you like to add?',
          name: 'employeeType',
          choices: ['Engineer', 'Intern', 'Manager',]
        }
    ])
    .then(val => {
        if(val.employeeType === "Engineer") {
            addEngineer()
        }
        if(val.employeeType === "Intern") {
            addIntern()
        }
        if(val.employeeType === "Manager") {
            addManager()
        }
    })
  };

askToAddEmployee()

// render()
//   .then(data => {
//     const html = htmlRenderer(data);

//     return writeFileAsync('ExampleTeam.html', html);
//   })
//   .then(() => {
//     console.log('Successfully wrote your html File');
//   })
//   .catch(err => console.log(err));


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
