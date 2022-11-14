// Асинхронные функции. Фундаментальный JavaScript
// https://www.youtube.com/watch?v=r149nt43mJU

fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
       return response.json();
    })
    .then((data) => {
       console.log('data >>>', data); 
    })
    .catch(console.error);


// перепишим работу с fetch на async

async function getPosts(url) {
    try {
        const response = await fetch(url);  // await fetch(url) возвращает Promise 
        const posts = await response.json(); //await response.json() возвращает Promise
        
        return posts;
    } catch (error) {
        console.warn(error);
        return error
    }
   
} // асинхронная функция всегда возвращает Promise

// getPosts('https://jsonplaceholder.typicode.com/photos')
//     .then((response) => {
//         console.log('use async fn >>>', response);
//     })
//     .catch(console.warn)


getPosts('https://jsonplaceholder.typicode.com/photos')
    .then((data) => {
        console.log('use async fn >>>', data)
    })


// способы записи

// const getComments = async function() {} // function expresion
// const getComments = async () => {} // arrow function


// может использоваться в Class

// class Articles {
//      // async methods in Class
//     async methodName() {
//         // ... some code
//     }
// }

// const article = new Articles();
// article.methodName();
