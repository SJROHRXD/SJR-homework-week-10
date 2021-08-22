// ENGINEER SUBCLASS //
const Employee = require("./EmployeeClass");

class Engineer extends Employee {
    constructor (github, name, id, email, role) {
        super (name, id, email, role);
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

// EXPORT OR NAH? //
module.exports = Engineer;

console.log ("---ENGINEER SUBCLASS---");
Engineer.getGithub();
Engineer.getRole();