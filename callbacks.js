//Mimic Blog Post on a server.....

const posts = [
    { title: 'Post One', body : 'This is post one'},
    { title: 'Post Two', body : 'This is post two'}
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

/* adding a callback function so that it is directly called right after
    the code is executed in the below function and hence the timeout
    won't affect the calling of the getPosts function.......
    We write the callback function as a paramter of the other function....
*/
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title: 'Post Three', body : 'This is post three'}, getPosts);
