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


// var createPost = (post) => {

//     return new Promise((resolve, reject) => {        
//         setTimeout(() => {            

//             posts.push(post);

//             const err = false;

//             if(!err){
            
//                 resolve();
          
//             } else{
          
//                 reject('Error: Something went wrong');
//             }

//         }, 2000);
//     });

   
// }


// createPost({title:'post Four', body:'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

//Async / Await
// async function init() {
// await createPost({title:'post Four', body:'this is post three'});
// getPosts();
// }
// init();

//Fetch 
// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// fetchUsers();

//Promise.all
// const promise1 = Promise.resolve('Hello');
// const promsie2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

//Fetch
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promsie2, promise3, promise4])
// .then(values => console.log(values));
