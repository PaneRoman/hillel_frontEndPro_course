// ДЗ 9. Массив

// Создать массив, длину и элементы которого задаёт пользователь.
// Отсортировать массив по возрастанию.
// Удалить элементы из массива с 2 по 4 (включительно!).

// По мере изменений, выводить содержимое массива на страницу.


// let arrLength = Number(prompt('Введите длинну массива, число от 0 до 7:', 5));
// let array = [];

// for (let i = 0; i < arrLength; i++) {
//     let arrItems = Number(prompt('Введите число от 1 до 100'));
//     array.push(arrItems);
// }
// alert(`Ваш массив: ${array}`);

// // let originArr = array.concat();

// // *Сортируем массив
// array.sort(function (a, b) {
//     return a - b;
// })
// alert(`Отсортированый массив: ${array}`);

// // *Удаление 2 и 4 элемента массива
// array.splice(1, 3);
// alert(`Обновленный массив: ${array}`);

// alert(originArr);



// ДЗ 10. Поиск в массиве

// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let defaultArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(defaultArr);

// Найти сумму и количество положительных элементов.
let newPosArr = defaultArr.filter(function (item, i, arr) {
    return item > 0;
});
console.log(newPosArr);

console.log(`Количество положительных элементов: ${newPosArr.length}`);
console.log(`Сумма положительных элементов: ${newPosArr.reduce((acc, item) => acc + item, 0)}`);

// Найти минимальный элемент массива и его порядковый номер.
console.log(`Минимальный элемент массива: ${Math.min(...defaultArr)}`);
console.log(`его порядковый номер: ${defaultArr.indexOf(Math.min(...defaultArr))}`);

// Найти максимальный элемент массива и его порядковый номер.
console.log(`Максимальный элемент массива: ${Math.max(...defaultArr)}`);
console.log(`его порядковый номер: ${defaultArr.indexOf(Math.max(...defaultArr))}`);

// Определить количество отрицательных элементов.
let newNegArr = defaultArr.filter(function (item, i, arr) {
    return item < 0;
});
console.log(newNegArr)

console.log(`Количество отрицательных элементов: ${newNegArr.length}`);

// Найти количество нечетных положительных элементов.
let oddPos = newPosArr.filter(function (item, i, arr) {
    return item % 2 !== 0;
})
console.log(oddPos);
console.log(`Количество нечетных положительных элементов: ${oddPos.length}`);

// Найти количество четных положительных элементов.
let evenPos = newPosArr.filter(function (item, i, arr) {
    return item % 2 == 0;
});
console.log(evenPos);
console.log(`Количество четных положительных элементов: ${evenPos.length}`);

// Найти сумму четных положительных элементов.
console.log(`Сумма четных положительных элементов: ${evenPos.reduce((acc, item) => acc + item, 0)}`);

// Найти сумму нечетных положительных элементов.
console.log(`Сумма нечетных положительных элементов: ${oddPos.reduce((acc, item) => acc + item, 0)}`);

// Найти произведение положительных элементов.
console.log(`Произведение положительных элементов: ${newPosArr.reduce((acc, item) => acc * item, 1)}`);

// Найти наибольший среди элементов массива, остальные обнулить.
let maxAndZeroArr = defaultArr.map(function (item, i, arr) {
    if (item < Math.max(...defaultArr)) {
        return item * 0;
    }
    return item;
});
console.log(maxAndZeroArr);


// ДЗ 11. Счета пользователей

// Дан массив объектов. Вывести массив телефонных номеров пользователей, у которых баланс более 2000 долларов.
// И найти сумму всех балансов пользователей

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]


function findUserBalance (userData) {
    let extractSymbols = ['$',','];
    let userBalance = userData.balance.split('').filter(function (item, i, arr) {
        return !extractSymbols.includes(item)
        
    }).join('');

    return Number(userBalance);
}

let totalUsersBalance = users.map(findUserBalance).reduce((acc, item) => acc + item, 0);

let usersTel = users.map(function (userData, i , arr) {
    if (findUserBalance(userData) > 2000) {
        return userData.phone
    }
   
}).filter(item => item !== undefined);


console.log(usersTel);
console.log(totalUsersBalance); 


// ДЗ 12. Реализуйте функцию removeElement

// Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, element) {
    let newArr = arr.filter(function(item){
        return item !== element;
    })
    return newArr;
}

console.log(removeElement(array, 5));



// ДЗ 13. Написать несколько функций
// Эта дз состоит из четырех небольших задач, за реализацию каждой из них можно получить 25 баллов:

// - Дан массив с элементами разных типов.
// Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.

let someArr = [2, 3, 9, 8, 20, 1, NaN, 'jjjk', false, true, '', [], {}];

function averageCalc(arr) {
    console.log(arr)
    let newArr = arr.filter(function (item) {
        if (typeof item == 'number') {
            if (!item) {
                return false
            }
            return true
        }
    })
    console.log(newArr)
    return (newArr.reduce((acc, item) => acc + item, 0)) / newArr.length;
    
}

console.log(averageCalc(someArr));


// - Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak.
// Оба числа и знак получаются от пользователя.

let x = Number(prompt('Введите 1-ое число', 5))
let y = Number(prompt('Введите 1-ое число', 10))
let znak = prompt('Введите любой из знаков (+, -, *, /, %, ^)')

function doMath(x, znak, y) {
   if (znak == '+') return alert(`${x}+${y}=${x + y}`);
   if (znak == '-') return alert(`${x}-${y}=${x - y}`);
   if (znak == '*') return alert(`${x}*${y}=${x * y}`);
   if (znak == '/') return alert(`${x}/${y}=${x / y}`);
   if (znak == '%') return alert(`${x}%${y}=${x % y}`);
   if (znak == '^') return alert(`${x}^${y}=${x ** y}`);
}

console.log(doMath(x, znak, y))


// - Написать функцию заполнения пользовательскими данными двумерного массива.
// Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.

function createUserArr() {
    let userArr = new Array(+prompt('Введитете длинну основного массива:', 4)).fill(0)
    .map(function (item, i) {
        return item = new Array(+prompt(`Введитете длинну ${i} внутреннего массива:`, 4)).fill(0)
            .map(function (element, index) {
                return element = +prompt(`Введите ${index} значение массива ${i}`)
            })
    } )
    return userArr;
}

console.log(createUserArr());



// - Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor". 
// Исходную строку и символы для удаления задаёт пользователь

function delSymbol(str, arr) {
    let strArr = str.split('').filter(function (item) {
        if (arr.includes(item)) {
            return false;
        }
        return true;
    })
    return strArr.join('');
}

console.log(delSymbol('hello world', ['l', 'd']))


