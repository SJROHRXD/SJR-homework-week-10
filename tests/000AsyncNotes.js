// ASYNC JS CRASH COURSE // Callbacks, Promises, Async Await //
// https://www.youtube.com/watch?v=PoRJizFvM7s //

// Callbacks, Promises, Async Await Syntax

// Ways to deal with asynchronous data
// Something is "going on," but you don't want to wait til that thing is doing to continue
// Making request to server, can take a while to get data back, if you don't want stalling, async!

// Callbacks, then ES6 (2015), then Promises Promises

// ES7, Async Await introduced
// Dealing with response in a more elegant way, looks more like sync programming (no more .then)

// Promise.all, resolve multiple promises
// Refer to Udemy for more of this (I have this course!)

// callbacks.js, promises.js

const posts = [
    { title: "Post 1", body: "This is Post 1." },
    { title: "Post 2", body: "This is Post 2." },
];

// shift + alt + down arrow to copy full line down

function getPosts() {
    setTimeout(() => {
        // takes in callback and then takes in certain amount of time for delay
        // time in milliseconds
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function creatPost(post, callbackP) {
    setTimeout(() => {
        posts.push(post);
        callbackP();
        // callback added here
    }, 2000);
};

// getPosts();
// // // changed

createPost({ title: "Post 3", body: "This is Post 3."}, getPosts);

// by the time we ran this, DOM already painted
// async and CB's solve this
// added getPosts as param to createPost because of callback