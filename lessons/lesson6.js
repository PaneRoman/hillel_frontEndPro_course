// Лексическое окружение. Что такое замыкание?. Методы.
// Метод - функция, которая является свойством обьекта


// function test () {
//     console.log('test');
// }

// const obj = {
//     test: function () {  // метод обьекта
//         console.log('test');
//     },
//     // test: test // метод может быть ссылкой на внешнюю функцию
//     asd: 'ggg', // свойство обьекта

// }

// obj.test(); // test() - метод обьекта obj


// function test (a,b) {
//     const sum = a + b;
//     const minus = a - b;

//     return {     // return может возвращать обьекты тоже
//         sum,     // аналогично записи sum: sum
//         minus,
//     }
// }

// console.log('test', test(3,7))


// What is a Lexical Scope?
let a = 'global';

function outer() {
    let b = 'outer';

    function inner() {
        let c = 'inner';
        console.log(c);    // prints 'inner'
        console.log(b);    // prints 'outer'
        console.log(a);    // prints 'global'
    }
    console.log(b);    // prints 'outer'
    console.log(a);    // prints 'global'
    inner();
}
outer();
console.log(a);    // prints 'global'
//
//
const b = 7; // в области видимости функции sum(), test() и min()

function test() {

    const b = 4; // в области видимости функции sum() и test()
    
    function sum(a) {  // (a) в области видимости функции sum()
        return a + b;
    }

    return {
        sum: sum,
    }
}

function min () {
    return a - b;
}

let call = test()
console.log(call.sum(0))

console.log(call, test(), test().sum(0));
// console.log(sum(1,23)); // Uncaught ReferenceError: sum is not defined
// console.log(min()); // Uncaught ReferenceError: a is not defined at min
//


//Examples of Closure

// Example #1
function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    }
}

let peter = person();
console.log(peter)
peter(); // prints 'Peter'
//
// Example #2
function getCounter() {
    let counter = 0;
    
    return function () {
        return counter++;
    }
}

let count = getCounter();
console.log(count)
console.log(count()); //0
console.log(count()); //1
console.log(count()); //2
//



let makeCounter = function() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};
// let counter = makeCounter();
// console.log(counter)
// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

// let counter2 = makeCounter();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.value());


// # # #
//  # #
const pattern = '#_';
let strPattern = '';
for (let i = 0; i < 4; i++) {
    strPattern += pattern;
}
console.log(strPattern);

function createChess() {
    let fullPatternArr = strPattern.split('');
    let reversePatternArr = fullPatternArr.concat().reverse()
    let result = [];

    for (let i = 0; i < 4; i++) {
        result.push(fullPatternArr);
        result.push(reversePatternArr);
        
    }
    return result
}
console.log(createChess());


// Unique
function hash(str) {
    let unique = {};
    console.log(str[0])
    for(i = 0; i < str.length; i++) {
       if (unique[str[i]]) {
            unique[str[i]]++ 
       } else {
            unique[str[i]] = 1;
       }
       
    }
    return unique
}
console.log(hash('rrrqoqwwqweekkkkewwerq')); //{r: 4, q: 4, o: 1, w: 5, e: 4, …}


function replace(str, inc, exc) {
    
}

console.log(rep('qwqe', ['q','r'], ['a', 'l']));