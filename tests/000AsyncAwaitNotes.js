// MODERN CONCURRENCY //

// Concurrency is doing multiple tasks in a period of time
// Generally order-independent
// Tasks running in parallel

// CPU needs to stop and wait for a thinggg

// 2 ways programs wait for IO


// blocking, synchronous (php, ruby, python, etc)
// need multithreading for blocking to work effectively!
// memory overhead, everythread requires memory
// CPU context switching

// nonblocking, event-loop, asynchronous
// single-threaded
// low memory consumption
// high concurrency
// great for UI and IO-bound services
// not great for CPU-bound

// JS is the 2nd one! ASYNC.

// most browsers are event-driven and non-blocking

// if you BLOCK in JS:
// alert, prompt, confirm
// synchronous XMLHttpRequests (RARE)
// fs.readFileSync in NODE!

// THIS IS RELEVANT BECAUSE PROMPT // 🎀

// generally, we use callbacks to skrrrt blocking
// example: pass function on click event, user clicks, then callback fired

// CALLBACK STYLE //
readFile("file.txt", (content) => {
    console.log(content);
});

// read file, when file finished reading, content bam

// CALLBACKS ARE OKAY
// great low-level abstraction for concurrency
// performs well, low overhead, no context switching

// HOWEVER
// callbacks in sequence = HARD
// parallel is even harder
// give up for/while, try/catch is gone
// error handling is BAD
// code readability suffers GREATLY
// MESSY to chain (boy do I HEAR this during this project omg)

// FOR EXAMPLE //
function getTotalFileSize(file1, file2, file3, callback) {
    let total = 0;
    status(file1, (error, info) => {
        total += info.size;
        status(file2, (error, info) => {
            total += info.size;
            status(file3, (error, info) => {
                total += info.size;
                callback(total);
            });
        });
    });
};
// I DON'T LIKE THAT //

// IN PARALLEL //
function getTotalFileSize(file1, file2, file3, callback) {
    let numFinished = 0;
    let total = 0;
    [file1, file2, file3].forEach((file) =>{
        status(file, (error, info) => {
            total += info.size;
            numFinished += 1;
            if (numFinished === 3) {
                callback(total);
            }
        });
    });
};
// SIR, WHAT ARE YOU DOING //
// answer might come back in any order, have to track, holy shit
// I hate it.
// and we didn't even look at error handling!
// readability issues w/ error handling
// difficult to maintain!

// PROMISES //
// a thin wrapper around callbacks
// powerful abstraction on top of callbacks
// give us chaining, give us helpers
// composable
// we can pass around a representation of a future value

// A promise is an object that represents what the value will be when an operation finishes. //

readFile("config.json")
    .then(...)
    .catch(...);

// we can do some chaining

// Example: function uses setTimeout, waits for 1 second
// then fulfills promise
// wait one second, log something, again, then last log

sleep(1000)
    .then(() => {
        console.log("1");
        return sleep(1000);
    })
    .then(() => {
        console.log("2");
        return sleep(1000);
    })
    .then(() => {
        console.log("3");
    });
// it's definitely prettier

// inside then handler, returning another promise
// sleep returns promise that will resolve in future
// this returned promise allows us to call another then

// FLOW CONTROL //
fetchJSON("/user/profile")
    .then((user) => {
        return fetchJSON(`/users/${user.id}/friends`);
    })
    .then((friendIDs) => {
        let promises = friendIDs.map((id) => {
            return fetchJSON(`/users/${id};`);
        });
        return Promise.all(promises);
    })
    .then((friends) => console.log(friends));
// fetch data about user that's logged in
// get back user object
// fetch friends of user
// return promise
// when that finished, the id's of all friends
// map through each friend id
// fetch user details of that friend
// create an array of promises
// for each id, return a new promise
// then .map creates array of promises
// promise.all waits for them to finish, gets results
// return promise
// last .then, all details, all friends in order they were provided
// in order from that generated array!

// first two things are in sequence, and last portion in parallel

// POWERFULL //

// ERROR HANDLING //
// exceptions will bubble up similar to how it works in asynchronous code
// attach a single catch()

fetchJSON("/user/profile")
    .then((user) => {
        return fetchJSON(`/users/${user.id}/friends`);
    })
    .then((friendIDs) => {
        let promises = friendIDs.map((id) => {
            return fetchJSON(`/users/${id};`);
        });
        return Promise.all(promises);
    })
    .then((friends) => console.log(friends));
    // .try???
    // .catch((error) => {
    //     console.error("An error occurred.");
    // });
// hmm, work on this!
// what about switch case

// PAUSING? //

// JS is fundamentally single-threaded
let promise = fetch("users");
//  TODO - wait for promise to resolve
console.log(promise.result);

// GENERATOR FUNCTION //

function* generatorFunction() {
    let result = fetch("/users");
// PAUSE EXECUTION BY YIELDING
    yield result;
// LET SOMETHING CAUSE US TO RESUME
    console.log("We're back!");
};

// ASYNC AWAIT // WHERE THE MONEY IS //

async function getUsers() {
    let result = await fetchJSON("/users");
    console.log(result);
};

// AWAIT IS THAT PAUSE
// HELL YEAH BABY

// you can only use await inside an async function
// it has to work with promises

// we ge back our "for/while", "try/catch"
// becomes readable
// flows like normal, thread-blocking programming

// EXAMPLE AWAIT FUNCTIONS //

async function readConfig() {
    try {
        let content = await readFile("config.json");
        let obj = JSON.parse(content.toString());
        console.log(obj);
    } catch (error) {
        console.error("An error occurred", error);
    }
};

async function animate(element) {
    for (let i = 0; i < 100; i++) {
        element.style.left = i + "px";
        await sleep(16);
    }
};

// a async function itself returns a promise
// when we await a promise, our function pauses until promise is ready
// we can still use our favorite promise helpers, like promise.all

// as long as thing on right of await is a promise, we good

// TIPS //
// don't forget to use await lol
// be careful about doing too many things in sequence
// lean parallel
// using await IN map/filter will do something weird???
// if you pass an async into map will give you an array of promises
// it looks synchronous, but remember you code has been paused / resumed
// remember what you've changed re: vars and what will happen when resumed