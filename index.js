const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


const Employee = require("./lib/EmployeeClass");
// const EmployeeClass = require("./lib/EmployeeClass");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

// var id = 0;
var teamArray = [];
var teamWrite = ``;

init = async () => {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamWrite = teamWrite + html.generateCard(teamArray[i]);
        }

        let finalHTML = html.generateHTML(teamWrite)

        console.log("🌼 TEAM PROFILE GENERATOR 🌼 \nHTML Generating.")

        writeFileAsync("./dist/generatedHTML.html", finalHTML);

        console.log("🌼 TEAM PROFILE GENERATOR 🌼 \nHTML Generated: generatedHTML.html")

    } catch (err) {
        return console.log(err);
    }
};   

async function prompt () {
    let done = "";

    do {
        try {
            // try / catch block
            // all code that could potentially fail or cause an error is mushed in here
            // catch will manage all of the code inside of this try section
            // any error will immediately leave the try block and log in our catch section
            console.log("🌼 TEAM PROFILE GENERATOR 🌼 \nFollow the prompts to create a new employee.");
            let response = await inquirer.prompt([
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
            ]);

            let roleSelected = "";

            if (response.eRole === "Engineer") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putin",
                    message: "What is the GitHub username of the new Engineer?",
                },
            ]);

                const engineer = new Engineer(response.eName, response.eID, response.eMail, roleSelected.putin);
                // building our engineer with our responses
                teamArray.push(engineer);
                // pushing that new engineer to our teamArray
                }])
            }
        }
    }
}




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




// INITIALIZE //
// init();