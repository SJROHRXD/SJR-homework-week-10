const { test, expect } = require("@jest/globals");
const Employee = require("../lib/EmployeeClass");

test("Testing Employee Name", () => {
    const employee = new Employee("Sarah", "99", "sjrohrxd@devmail.com")
    expect(employee.getName()).not.toBe(undefined, null)
})
test("Testing Employee ID", () => {
const employee = new Employee("Sarah", "99", "sjrohrxd@devmail.com")
    expect(employee.getId()).not.toBe(undefined, null)
})
test("Testing Employee Email", () => {
const employee = new Employee("Sarah", "99", "sjrohrxd@devmail.com")
    expect(employee.getEmail()).not.toBe(undefined, null)
})
test("Testing Employee Role", () => {
const employee = new Employee("Sarah", "99", "sjrohrxd@devmail.com")
    expect(employee.getRole()).not.toBe(undefined, null)
});