const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Testing Intern Role", () => {
    const intern = new Intern("MY SCHOOL", "Sarah", "99", "sjrohrxd@devmail.com")
    expect(intern.getRole()).toContain("Intern")
})
test("Testing Intern School", () => {
    const intern = new Intern("MY SCHOOL", "Sarah", "99", "sjrohrxd@devmail.com")
        expect(intern.getSchool()).toStrictEqual(`Intern School: MY SCHOOL.`)
});