// JEST NOTES - TRAVERSY MEDIA - https://www.youtube.com/watch?v=7r4xVDI2vho // π€πΏπΌ

// "add the --verbose flag to your npm test script in the package.json file to show all the distinct tests no matter how many test suites"

// run npm init -y; create package.json file

// run npm i -D jest OR
// npm install --save-dev jest (this is what I ran???)

// change value of "scripts" in package.json to "jest"

// create basic functions in functions.js file

// export using module.exports

// create testing in functions.test.js file

// require the functions.js file in the functions.test.js file !important

// TESTING // π€πΏπΌ

// use test, use expect

// toBeNull matches only null π€πΏπΌ

// toBeUndefined matches only undefined π€πΏπΌ

// toBeDefined matches only defined π€πΏπΌ

// toBeTruthy matches anything that an if statement treats as true π€πΏπΌ

// toBeFalsy matches anything that an if statement treats as false π€πΏπΌ

// Null, Undefined, 0, these are FALSY values; if you expect FALSY, these will PASS

// .not.toBeFalsy == .toBeTruthy

// .toEqual
// .toEqualStrict
// these for an object or array

// Less than, Greater than Matchers also
// .toBeLessThan()
// .toBeGreaterThan()

// REGEX (Regular Expressions)
// test("there is no I in team", () => {
//    expect("team").not.toMatch(/I/i);
// });
// check CASE SENSITIVITY

// ARRAYS
// test("Admin should be in usernames", () => {
//     usernames = ["John", "Karen", "Sally", "Admin"];
//     expect(usernames),toContain("Admin");
// });
// .toContain

// ASYNCHRONOUS DATA
// axios (http client) OR fetch
// TEST HERE FOR API --- useful at some point
// https://youtu.be/7r4xVDI2vho?t=1298
// STOPPING HERE

// TEST FOR ERROR
// .toThrow - if you want to test whether a function throws an error when it's called

// MORE MATCHERS // π€πΏπΌ
// https://jestjs.io/docs/using-matchers
// https://jestjs.io/docs/expect

// expect.anything()
// not NULL not UNDEFINED