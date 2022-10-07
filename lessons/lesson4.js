// // Рекурсия
// function random1to100no3() {
//     let result = Math.floor(Math.random() * 101);
//     let toString = result + '';
    
//     for (let item of toString) {
//         if (item === '3') {
//             random1to100no3();
//             return
//         }
//     }
//     console.log(Array.from(String(result)) );
// }

// random1to100no3();


// // Рекурсия
// function random1to100no3and6() {
//     let result = Math.floor(Math.random() * 101);
//         toString = result + '';
    
//     for (let item of toString) {
//         if (item === '3' || item === '6') {
//            random1to100no3and6();
//            return 
//         }
//     }
//     console.log(result);
// }

// random1to100no3and6();


// Рекурсия
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

function random(min, max, exclude = []) {
    // let arr = [];      // старое решение проблемы отсутствия значения в параметре функции.
    // if (exclude) {      
    //     arr = exclude;
    // }
    console.log(min, max, exclude)
    let string = randomIntFromInterval(min, max);
    for(let number of string){
        if (exclude.includes(+number)) {            // вместо exclude в старом решение пишем arr
            return random(min, max, exclude)
        }
    }
    return Number(string) ;
}

// console.log(random(1, 100, [3]));
// console.log(random(1, 100, [3, 6]));
// console.log(random(1, 100));



//Arguments
function sum() {
    let s = 0;
    for(let number of arguments){
        s +=number;
    }

    return s;
}

// console.log(sum(1, 2));
// console.log(sum(1, 2, 4));
// console.log(sum(1));


//...args
function fn(previousValue, currentValue) {
    return previousValue + currentValue;
}

function sum(numbs, ...args) {

    console.log(numbs, args);
    return [...numbs, ...args].reduce(fn, 0);
}

// console.log(sum([1,2,3],2));
// console.log(sum([12,3],4,5));
// console.log(sum([1]));


// Callback

//Callback Function.Функция которую передаем в другую функцию в виде аргумента
function sayHi(name) {      
    console.log('Hi',name);
}
//Callback Function.Функция которую передаем в другую функцию в виде аргумента
function sayHello(name) {   
    console.log('Hello',name);
}

//High Order Component(High Order Function).Функция высшего порядка.Функция, которая принимает одним из
//аргументов другую функцию и ее потом ее вызывает, или чтото с ней делает
function greeting(gr, name) { 
    gr(dd);
}

// greeting(sayHi, 'Vasya');
// greeting(sayHello, 'Roma');


// function sum(a) {
//     return function (b) {
//       return a + b;  
//     }
// }
// console.log(sum(1)(2));
// console.log(sum(1));


function add(a,b) {
    return a + b;
}

function sum(a) {
    return add
}

const addSum = sum(1);

const ddd = function() {
    console.log('ddd')
}
ddd();

console.log(addSum);
console.log(addSum === add);
// console.log(sum(1)(4,2));
// console.log(add);

//// sum() === add
//// sum()() === add()


