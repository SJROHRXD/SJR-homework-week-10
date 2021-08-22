// INTERN SUBCLASS //
const Employee = require("./EmployeeClass");

class Intern extends Employee {
    constructor (school, name, id, email, role) {
        super (name, id, email, role);
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