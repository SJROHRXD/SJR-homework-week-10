// EMPLOYEE CLASS //
class Employee {
    constructor (name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }

    getName() {
        return (`Employee Name: ${this.name}.`);
    }
    getId() {
        return (`Employee ID: ${this.id}.`);
    }
    getRole() {
        return (`Employee Role: ${this.role}.`);
    }
};

module.exports = Employee;