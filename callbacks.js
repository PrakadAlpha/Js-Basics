const posts = [
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'},
    {title:'post three', body:'this is post three'}
];

var getPosts = () => {
    setTimeout( () =>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}


var createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title:'post Four', body:'this is post three'}, getPosts);