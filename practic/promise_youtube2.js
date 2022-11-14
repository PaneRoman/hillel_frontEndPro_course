// ES6 #12. JavaScript Promise.
// Что это и как работает (+ запросы данных из Coffee API, Beer API и др.)
// https://www.youtube.com/watch?v=0O-ZVnwbGW4

// console.log('Start');
// const list = fetch('https://api.sampleapis.com/countries/countries');
// console.log('Done!');
// console.log('countries >', list);



// const listPromise = fetch('https://api.sampleapis.com/countries/countries');

// listPromise
//     .then((response) => {
//         return response.json();
//     })
//     .then((countries) => {
//         console.log(countries);
//     })
//     .catch((err) => {
//         console.log('Error >', err);
//     })

// console.log(listPromise);



// const coffee = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Your coffe DONE!')
//     }, 5000)
// });

// coffee.then((response) => {
//     console.log(response);
// })
// console.log(coffee);



// const family = [
//     {member: 'mother', id: 111, coffee: 'Latte'},
//     {member: 'father', id: 222, coffee: 'Espresso'},
//     {member: 'son', id: 333, coffee: 'Cappucino'},
// ]

// const getCoffee = (member) => {
//     const coffePromise = fetch('https://api.sampleapis.com/coffee/hot');
//     return coffePromise
//         .then((response) => {
//             return response.json();
//         })
//         .then((list) => {
//             console.log('list >>>', list);
//             const coffee = list.find((item) => {
//                 return item.title === member.coffee;
//             });
//             console.log(coffee);

//             return {
//                 ...member,
//                 coffee: coffee,
//             }
//         })
// }

// const getFamilyMember = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const member = family.find((res) => {
//                 return res.id === id;
//             });

//             // console.log(member);

//             if (member) {
//                resolve(member) 
//             } else {
//                 reject(Error('Family member undefined!'))
//             }
//         }, 1500)
//     })
// }

// getFamilyMember(111)
//     .then((response) => {
//         console.log(response);
//         return getCoffee(response);
//     })
//     .then((newMember) => {
//         console.log('newMember >', newMember);
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// Методы Promise

// const makeCoffee = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Your coffee READY!')
//         }, 1000)
//     })
// }

// const makeToast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Your toast READY!')
//         }, 2000)
//     })
// }

// const coffeePromise = makeCoffee();
// const toastPromise = makeToast();

// Promise.all([coffeePromise, toastPromise]).then((response) => {
//     console.log(response)
// })



// const beersPromise = fetch('https://api.sampleapis.com/beers/ale');
// const winesPromise = fetch('https://api.sampleapis.com/wines/reds');

// Promise.all([beersPromise, winesPromise])
//     .then((response) => {
//         return Promise.all(response.map((res) => {
//             return res.json();
//         }))
//     })
//     .then((data) => {
//         console.log(data)
//     })
