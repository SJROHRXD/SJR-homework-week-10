const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/EmployeeClass");
const EmployeeClass = require("./lib/EmployeeClass");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var id = 0;
var teamArray = [];

init = async () => {
    console.log("🌼 TEAM PROFILE GENERATOR 🌼 \nFollow the prompts to create a new employee.");
    const promptResults = await inquirer.prompt([
        // CREATE EMPLOYEE //
        {
            type: "input",
            name: "eName",
            message: "What is the name of the new employee?",
        },
        {
            type: "input",
            name: "eID",
            message: "Enter the employee's ID.",
        },
        {
            type: "input",
            name: "eMail",
            message: "Enter the employee's email address.",
        },
        {
            type: "checkbox",
            name: "eRole",
            message: "What is the role of the new employee?",
            choices: ["Engineer", "Intern", "Manager"],
        },
        // if (response.role === "Engineer") {
        // }
        // else if (response.role === "Intern") {
        // }
        // else ()
        // PUSHING RESULTS TO ARRAY //
    ]);
    promptResults.role = "Employee";
    const { name, id, email } = promptResults;
    const newEmployee = new Employee(name, id, email);
    emps.push(newEmployee);
};

// TO BE PROMPTED AFTER ROLE SELECTION? //

// {
//     type: "input",
//     name: "mOfficeNumber",
//     message: "What is Office Number of the new Manager?",
// },
// {
//     type: "input",
//     name: "iSchool",
//     message: "Where is the new Intern attending school?",
// },
// {
//     type: "input",
//     name: "eGitHub",
//     message: "What is the GitHub username of the new Engineer?",
// },

// WRITE HTML FILE //
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("✨ HTML Generated ✨");
    });
}

// FUNCTION - INITIALIZE APP //
// function init() {
//     inquirer.prompt(createEmp) // PROBABLY WON'T USE
//     .then(function (userInput) {
//         console.log(userInput);
//         writeToFile("./dist/generateHTML.html", generateHTML(userInput));
//     });
// };

// INITIALIZE //
// init();