// ENGINEER SUBCLASS //
const Employee = require("./EmployeeClass");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return (`Engineer GitHub Username / Alias: ${this.github}.`);
    }
    getRole() {
        return (`Employee Role: ${this.role}.`);
    }
};

module.exports = Engineer;

// console.log ("---ENGINEER SUBCLASS---");
// Engineer.getGithub();
// Engineer.getRole();