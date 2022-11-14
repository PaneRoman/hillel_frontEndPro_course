// Что такое промисы в JavaScript. Фундаментальный JavaScript
// https://www.youtube.com/watch?v=4X7OjIjjaQE


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 1000)
// }); 

// promise1.then((value) => {
//     console.log(value);
// })

// promise1.catch((value) => {
//     console.log(value);
// })

// console.log(promise1);



// function akaFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello from promise');
//         }, 2000)
//     })
// }

// akaFetch()
//     .then((response) => {
//         console.log(response);
//         return response + '!';
//     })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => {
//         console.warn('operation complete');
//     })



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
       console.log(data); 
    })



// Методы промисов и когда их применять.
// Фундаментальный JavaScript
// https://www.youtube.com/watch?v=yx7SU2BQbus

async function getPosts() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

   return await response.json();
}

async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');

   return await response.json();
}

async function getComments() {
   const response = await fetch('https://jsonplaceholder.typicode.com/comments');

   return await response.json();
}




Promise.all([getPosts(), getUsers(), getComments()])
   .then((response) => {
      console.log(response);
   })

Promise.allSettled([getPosts(), getUsers(), getComments()])
   .then((response) => {
      console.log(response);
   })

Promise.race([getPosts(), getUsers(), getComments()])
   .then((response) => {
      console.log(response);
   })


async function getImages() {
   // const response = await fetch('https://jsonplaceholder.typicode.com/images');
   
   // return await response.json();
   
   // return Promise.resolve([
   //    {id: 1, src: 'http://google.com', alt: 'text'}
   // ]) // Метод resolve() имитирует успешность отработки асинхронного запроса

   return Promise.reject('server error'); // Метод reject() имитирует отказ асинхронного запроса
}

getImages().then((response) => {
   return console.log(response);
}).catch((response) => {
   console.warn(response);
})