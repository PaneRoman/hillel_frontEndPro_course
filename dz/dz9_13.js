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
    let userBalance = userData.balance.split('').filter(function (item, i, arr) {
        return (item !== '$' && item !== ',')
    }).join('');

    return Number(userBalance);
}

let totalUsersBalance = users.map(findUserBalance).reduce((acc, item) => acc + item, 0);

let usersTel = users.map(function (userData, i , arr) {

    // let userBalance = userData.balance.split('').filter(function (item, i, arr) {
    //     return (item !== '$' && item !== ',')
    // }).join('');

    if (findUserBalance(userData) > 2000) {
        return userData.phone
    }
        
}).filter(item => item !== undefined);


console.log(usersTel);
console.log(totalUsersBalance); 

// let newStr = "$1,790.56".split('').filter(function (item, i, arr) {
//     return (item !== '$' && item !== ',')
        
    
// }).join('')
// console.log(newStr)