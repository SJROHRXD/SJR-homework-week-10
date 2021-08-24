const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Testing Engineer Role", () => {
    const engineer = new Engineer("SJROHRXD", "Sarah", "99", "sjrohrxd@devmail.com")
    expect(engineer.getRole()).toContain("Engineer")
})
test("Testing Engineer GitHub", () => {
    const engineer = new Engineer("SJROHRXD", "Sarah", "99", "sjrohrxd@devmail.com")
        expect(engineer.getGithub()).toStrictEqual(`Engineer GitHub Username / Alias: SJROHRXD.`)
});