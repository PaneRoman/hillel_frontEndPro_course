// Михаил Непомнящий
// Что такое рекурсия. Фундаментальный JavaScript
// https://www.youtube.com/watch?v=QY-ZldUrvZA

// Простой пример рекурсии
let count = 0;

function recurse() {
    if (count === 5) {
      return 'done'; 
    }

    count++;
    return recurse();
}

console.log(recurse(), count)

// Подсчитать количество символов числа при помощи рекурсии
let count2 = 0;

function sumOfDigits(number) {
    count2++;
    const array = number.toString().split('');
    if (array.length === 1) {
        return count2;
    }
    
    array.pop();
    const newNumber = Number(array.join(''));
    return sumOfDigits(newNumber);
}

console.log(sumOfDigits(10000)); // 5
console.log(sumOfDigits(1000)); // 4