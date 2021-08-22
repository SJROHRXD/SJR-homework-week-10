// MANAGER SUBCLASS //
const Employee = require("./EmployeeClass");

class Manager extends Employee {
    constructor (officeNumber, name, id, email, role) {
        super (name, id, email, role);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return (`Manager Office Number: ${this.officeNumber}.`);
    }
    getRole() {
        return (`Employee Role: ${this.role}.`);
    }
};

// EXPORT OR NAH? //
module.exports = Manager;

console.log ("---MANAGER SUBCLASS---");
Manager.getOfficeNumber();
Manager.getRole();