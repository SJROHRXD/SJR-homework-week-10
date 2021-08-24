// INTERN SUBCLASS //
const Employee = require("./EmployeeClass");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return (`Intern School: ${this.school}.`);
    }
    getRole() {
        return (`Employee Role: ${this.role}.`);
    }
};

module.exports = Intern;

// console.log ("---INTERN SUBCLASS---");
// Intern.getSchool();
// Intern.getRole();