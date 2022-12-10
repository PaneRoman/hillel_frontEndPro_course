// spread, rest, destruction
// https://youtu.be/L3g0kje6Q8M?t=1421


//Spread
const normalWork = ['engineer', 'buisnessman', 'mover'];
const work = [...normalWork, 'bloger', 'instamodel'];
console.log(work);

const worker = {
    'name': 'Alex',
    'job': 'Developer'
}

const macDuk = {
    ...worker,
    'prof': 'clean manager'
}
// console.log(macDuk);


//Rest
const num = (...args) => {
    return args;
}
console.log(num(1,2,7,88,66,5));


//Destruction
const arr1 = [33,44,55,66,77];
const [d1,d2,,d3] = arr1;
console.log(d1,d2,d3);

const {name, job, prof} = macDuk;
console.log(name, job, prof);