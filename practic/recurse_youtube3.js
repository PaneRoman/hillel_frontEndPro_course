// Рекурсия и стек в JavaScript на примерах: factorial, fibonacci, flatten
// https://www.youtube.com/watch?v=EzOb7CqYkfg

// Factorial Calculate
// 0! = 1
// n! = n * (n - 1)!

// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24

function factorial(n) {
    // if (n < 0) {   // Dopolnitelnaja proverka
    //     console.error('factorial must be possitive');
    //     return;
    // }
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(`factorial>>>>`, factorial(4));

// Kontekst vipolnenija factorial(4) >>> n = 4, this, stroka vipolnenija etou funkcii...
// Kontekst vipolnenija factorial(3) >>> n = 3, this, stroka vipolnenija etou funkcii...
//..............

// factorial(0) = 1 >>> resolve!
// factorial(1) = 1 * factorial(0) >>> 1 * 1 = 1 resolve!
// factorial(2) = 2 * factorial(1) >>> 2 * 1 = 2 resolve!
// factorial(3) = 3 * factorial(2) >>> 3 * 2 = 6 resolve!
// factorial(4) = 4 * factorial(3) >>> 4 * 6 = 24 resolve! clear Stack!
//===========Call Stack===========


// Fibonacci Calculate Sum
// fibonacci(0) = 0;
// fibonacci(1) = 1;
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2), n > 1

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}