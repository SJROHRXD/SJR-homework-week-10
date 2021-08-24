// REQUIRED //
const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const util = require("util");
const html = require("./src/generatedHTML.js");

// REQUIRED CLASSES //
// const Employee = require("./lib/EmployeeClass");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// PROMISES for WRITING //
const writeFileAsync = util.promisify(fs.writeFile);
// const appendFileAsync = util.promisify(fs.appendFile);

// ARRAYS GENERATED FOR ELLIES //
var teamWrite = ``;
var teamArray = [];   

async function prompt () {
    let done = "";
    do {
        // do / while creates a loop, will execute once, then check if the "condition is true"
        // our condition in this case is whether or not we'd like to create another employee
        // if done is equal to "Yes," which I'm realizing now seems counterintuitive, the code will run again to create a new employee
        // when the user decides they're done adding employees, the loop will stop
        try {
            // try / catch block
            // all code that could potentially fail or cause an error is mushed in here
            // catch will manage all of the code inside of this try section
            // any error will immediately leave the try block and log in our catch section
            console.log(`Hello! \nFollow the prompts to create a new employee.`);
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
                    type: "list",
                    name: "eRole",
                    message: "What is the role of the new employee?",
                    choices: [
                        "Engineer", 
                        "Intern", 
                        "Manager",
                    ]
                }
            ]);
            let roleSelected = "";
            if (response.eRole === "Engineer") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "What is the GitHub username of the new Engineer?",
                },
            ]);
            const engineer = new Engineer(response.eName, response.eID, response.eMail, roleSelected.putIn);
            // building our engineer with our responses
            teamArray.push(engineer);
            // pushing that new engineer to our teamArray

            } else if (response.eRole === "Intern") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "Where is the new Intern attending school?",
                },
            ]);
                const intern = new Intern (response.eName, response.eID, response.eMail, roleSelected.putIn);
                // building our intern with our responses
                teamArray.push(intern);
                // pushing that new intern to our teamArray

            } else if (response.eRole === "Manager") {
                roleSelected = await inquirer.prompt([{
                    type: "input",
                    name: "putIn",
                    message: "What is Office Number of the new Manager?",
                },
            ]);
                const manager = new Manager (response.eName, response.eID, response.eMail, roleSelected.putIn);
                // building our manager with our responses
                teamArray.push(manager);
                // pushing that new manager to our teamArray
            }
        } catch (err) {
            return console.log(err, `I really broke it.`);
        }
        done = await inquirer.prompt([{
            // code to run again if another employee needs to be created
            // use list instead of checkbox or my everything breaks 🍕🍕🍕
            type: "list",
            name: "uDone",
            message: "Would you like to add more employees?",
            choices: [
                "Yes",
                "No",
            ]
        },]);
    } while (done.uDone === "Yes");
};

// INITIAL: FUNCTION TO WRITE FROM USER INPUT //
async function init() {
    try {
        await prompt()

        // loops through team array, writes card to html
        for (let i = 0; i < teamArray.length; i++) {
            teamWrite = teamWrite + html.makeEmpCards(teamArray[i]);
        }

        let finalHTML = html.generatedHTML(teamWrite)

        writeFileAsync("./dist/generatedHTML.html", finalHTML);

        console.log(`TEAM PROFILE GENERATOR \nHTML Generated: generatedHTML.html`)

    } catch (err) {
        return console.log(err, `I broke it.`);
    }
};

// INITIALIZE //
init();