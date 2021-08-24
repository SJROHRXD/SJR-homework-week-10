// EMPLOYEE CLASS //
class Employee {
    constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }

    getName() {
        return (`Employee Name: ${this.name}.`);
    }
    getId() {
        return (`Employee ID: ${this.id}.`);
    }
    getEmail() {
        return (`Employee Email: ${this.email}.`)
    }
    getRole() {
        return (`Employee Role: ${this.role}.`);
    }
};

module.exports = Employee;

// MAYBE NOT THIS: //
// console.log ("---EMPLOYEE CLASS---");
// Employee.getName();
// Employee.getId();
// Employee.getEmail();
// Employee.getRole();