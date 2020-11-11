const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = []

const addEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?'
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
    const employee = new Engineer(data.name, data.id, data.email, data.github);
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
        const employee = new Intern(data.name, data.id, data.email, data.school);
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
        const employee = new Manager(data.name, data.id, data.email, data.officeNumber);
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
          message: "Would you like to add an employee?"
        }
    ])
    .then(val => {
        if (val.choice) {
            addEmployee();
        } 
        else {
            console.log(employees)
            console.log("Your team is being created!")
            render(employees);
            buildHtml()
        }
    });
}

const addEmployee = () => {
    inquirer.prompt([
      {
          type: 'list',
          message: 'What kind of employee would you like to add?',
          name: 'employeeType',
          choices: ['Manager', 'Engineer', 'Intern']
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

const buildHtml = () => {
    fs.writeFileSync(outputPath, render(employees), "utf-8")
}