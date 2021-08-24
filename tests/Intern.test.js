const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Testing Intern Role", () => {
    const intern = new Intern("Sarah", "99", "sjrohrxd@devmail.com", "MY SCHOOL")
    expect(intern.getRole()).toContain("Intern")
})
test("Testing Intern School", () => {
    const intern = new Intern("Sarah", "99", "sjrohrxd@devmail.com", "MY SCHOOL")
        expect(intern.getSchool()).toStrictEqual(`Intern School: MY SCHOOL.`)
});