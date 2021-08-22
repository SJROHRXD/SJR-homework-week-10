// TESTING JEST TESTS //

const { test, expect } = require("@jest/globals"); // added by default, thanks vscode 😅
const functions = require("./999FunctionTests"); // require the functions function


// TEST 1 //
// pass in description param, which will be our confirmation output
// pass in function as next param, expect the function (from functiontests) to add 2 and 2
// and expect that toBe 4!

test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
})

// TEST 2 //
// pass in description param, which will be our confirmation output
// pass in function as next param, expect the function (from functiontests) to add 2 and 2
// and expect that NOT toBe 5!

test("Adds 2 + 2 to not equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
})