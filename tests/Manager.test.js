const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Testing Manager Role", () => {
    const manager = new Manager("Sarah", "99", "sjrohrxd@devmail.com", "666")
    expect(manager.getRole()).toContain("Manager")
})
test("Testing Manager Office Number", () => {
    const manager = new Manager("Sarah", "99", "sjrohrxd@devmail.com", "666")
        expect(manager.getOfficeNumber()).toStrictEqual(`Manager Office Number: 666.`)
});