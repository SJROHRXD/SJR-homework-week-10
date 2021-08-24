const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Testing Engineer Role", () => {
    const engineer = new Engineer("Sarah", "99", "sjrohrxd@devmail.com", "SJROHRXD")
    expect(engineer.getRole()).toContain("Engineer")
})
test("Testing Engineer GitHub", () => {
    const engineer = new Engineer("Sarah", "99", "sjrohrxd@devmail.com", "SJROHRXD")
        expect(engineer.getGithub()).toStrictEqual(`Engineer GitHub Username / Alias: SJROHRXD.`)
});