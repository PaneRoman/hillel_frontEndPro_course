// ДЗ 6. switch…case

// Переписать код ниже с использованием конструкции switch…case

let arg = prompt('input number or string');
console.log(arg)

const test = (arg) => {
  
    switch (arg) {
        case null:
            console.log('вы отменили');
            break;
        case '':
            console.log('empty string');
            break;
        case isNaN(arg):
            console.log('NaN');
            break;
        default:
            console.log('ok');
            break;
    }
    
    return;
}

test(arg)


// ДЗ 7. Написание циклов

// Вывести на страницу в одну строку через запятую числа от 10 до 20

// let i = 10;
// let result = '';

// while (i <= 20) {
//     result = result + `${i},`;
//     i++;
// }
// alert(result);


// Вывести квадраты чисел от 10 до 20

// let i = 10;
// let result = '';

// while (i <= 20) {
//     result = result + `${i**2},`;
//     i++;
// }
// alert(result);


// Вывести таблицу умножения на 7

// let i = 1;
// let seven = '';

// while (i <= 7) {
//     seven = seven + `${i}*7=${i*7} `
//     i++;
// }
// alert(seven);


// Найти сумму всех целых чисел от 1 до 15

// let i = 1;
// let sum = 0;

// while (i <= 15) {
//     sum = sum + i;
//     i++;
// }
// alert(sum);


// Найти произведение всех целых чисел от 15 до 35

// let i = 15;
// let multy = 1;

// while (i <= 35) {
//     multy = multy * i;
//     i++;
// }
// alert(multy);


// Найти среднее арифметическое всех целых чисел от 1 до 500

// let i = 1;
// let sum = 0;

// while (i <= 500) {
//     sum = sum + i;
//     i++;
// }
// alert(sum/500);


// Вывести сумму только четных чисел в диапазоне от 30 до 80

// let i = 30;
// let sum = 0;

// while (i <= 80) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     };
//     i++;
// }
// alert(sum);


// Вывести все числа в диапазоне от 100 до 200 кратные 3

// let i = 100;
// let result = '';

// while (i <= 200) {
//     if (i % 3 == 0) {
//         result = result + `${i},`
//     };
//     i++;
// }
// alert(result);


// Дано натуральное число. Найти и вывести на страницу все его делители.
// Определить количество его четных делителей.
// Найти сумму его четных делителей.

// let num = 77;
// let i = 1;
// let result = '';
// let evenCount = 0;
// let evenSum = 0;

// while (i <= num) {                  // (i <= num/2) - moget bit' i takoe uslovie, tak kak posle
//     if (num % i == 0) {             // polovini velichini chisla yge net ego deliteleu. V vivod nugno dobavit
//         result = result + `${i},`   // samo chislo, tak kak ono delitsa na samo sebja
        
//         if (i % 2 == 0) {
//         evenCount++
//         evenSum = evenSum + i
//         };
//     };
    
//     i++;
// };
// alert(`deliteli: ${result}
// evenCount: ${evenCount}
// evenSum: ${evenSum}`);


// Напечатать полную таблицу умножения от 1 до 10

// let numStr1 = [1,2,3,4,5,6,7,8,9,10];
// let numStr2 = [1,2,3,4,5,6,7,8,9,10];
// let res = '';

// for (let i = 0; i < numStr1.length; i++) {
//     for (let j = 0; j < numStr2.length; j++) {
//         res = res + `${numStr1[i]}*${numStr2[j]}=${numStr1[i]*numStr2[j]} `
        
//     }
// }
// alert(res)



// ДЗ 8. Циклы посложнее

// Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)

// let result = '';

// for (let i = 20; i <= 30 ; i = i + 0.5) {
//     result = result + `${i} `
// };
// alert(result);


// Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

// let result = '';
// let dollarPrice = 27;

// for (let i = 10; i <= 100; i = i + 10) {
//     result = result + `${i}$*${dollarPrice}uah=${i*dollarPrice}
//     `
// };
// alert(result);


// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

// let num = 625;
// let result = '';

// let sqrt = Math.floor(Math.sqrt(num));

// for (let i = 1; i <= sqrt; i++) {
//     result = result + `${i}, `;
// }
// alert(result);


// Дано целое число. 
// Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

// let number = 12;
// let halfNum = number/2;
// let count = 0;

// for (let i = 2; i < halfNum; i++) {
//     if (halfNum % i == 0) {
//         count++
//     };
// }
// if (count == 0) {
//     console.log('number is simple');
// } else {
//     console.log('number is not simple')
// }


// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. 
// (Например, числа 9, 81 можно получить, а 13 - нельзя)

// let num = 81;
// let f = true;

// for (let i = 0; num !== 1 && f; i++) {
//     if (num % 3 == 0) {
//         num = num/3;
//     } else {
//         f = false;
//     };
// };

// console.log(num);

// if (num == 1) {
//     console.log('можно получить это число путем возведения числа 3 в некоторую степень')
// } else {
//     console.log('нельзя получить это число путем возведения числа 3 в некоторую степень')
// }







