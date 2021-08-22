// ASYNC JS CRASH COURSE // Callbacks, Promises, Async Await // PT 4 //
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

async function init() {
    await createPost ({ title: "Post 3", body: "This is post 3." });

    getPosts();
};

init();

// ASYNC AWAIT //
// handles responses