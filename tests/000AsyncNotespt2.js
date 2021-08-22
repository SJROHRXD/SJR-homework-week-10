// ASYNC JS CRASH COURSE // Callbacks, Promises, Async Await // PT 2 //
// https://www.youtube.com/watch?v=PoRJizFvM7s //

// Callbacks, Promises, Async Await Syntax

const posts = [
    { title: "Post 1", body: "This is Post 1." },
    { title: "Post 2", body: "This is Post 2." },
];

// shift + alt + down arrow to copy full line down

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

// MODIFIED //
// function creatPost(post, callbackP) {
//     setTimeout(() => {
//         posts.push(post);
//         callbackP();
//     }, 2000);
// };

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

createPost({ title: "Post 3", body: "This is post 3."})
    .then(getPosts)
    // when resolves, then it will call getPosts
    .catch(err => console.log(err));
    // catch the errorrrr