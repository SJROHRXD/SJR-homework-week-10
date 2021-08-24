// ASYNC JS CRASH COURSE // Callbacks, Promises, Async Await // PT 3 //
// https://www.youtube.com/watch?v=PoRJizFvM7s //

// Callbacks, Promises, Async Await Syntax

const posts = [
    { title: "Post 1", body: "This is Post 1." },
    { title: "Post 2", body: "This is Post 2." },
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function creatPost(post) {
    return new Promise((resolve, reject) => {
        // resolve a promise, call resolve
        // reject for an error
        setTimeout(() => {
            posts.push(post);

            const error = false;
            // error checking here

            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong.")
            }
        }, 2000);
    });  
};

// PROMISE.ALL //
const promise1 = Promise.resolve("Hello World!");
const promise2 = 44;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, "Goodbye!"))
;

// const promise4 = fetch("someapirequest");
// fetch is weird because you need to do 2 .then's
// format to json, then get data

// const promise4 = fetch("someapirequest").then(res => res.json());


Promise.all([promise1, promise2, promise3]).then(values => console.log(values));