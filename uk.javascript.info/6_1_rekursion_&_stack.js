// Рекурсія та стек

// Рекурсивний обхід

// Ще одним чудовим застосування рекурсії є рекурсивний обхід.
// Уявіть, у нас є компанія.
// Структура персоналу може бути представлена як об’єкт:

let company = {
    sales: [{
        name: 'Ivan',
        salary: 1000,
    }, {
        name: 'Alice',
        salary: 1600,
    }],

    development: {
        sites: [{
            name: 'Petro',
            salary: 2000,
        }, {
            name: 'Alex',
            salary: 1800,
        }],

        internals: [{
            name: 'Evgen',
            salary: 1300,
        }]
    }
};

// let company = { // той же об’єкт, стиснутий для компактності
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };

// Функція для підрахунку суми зарплат

function sumSalaries(department) {
    if (Array.isArray(department)) {  // випадок (1)
        return department.reduce((prev, current) => prev + current.salary, 0) // сума масиву
    } else {  // випадок (2)
        let sum = 0;
        // console.log(Object.values(department))
        for (const subdep of Object.values(department)) {
            // console.log(subdep)
            sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
        }
        return sum;
    }
}

console.log(sumSalaries(company));


// Зв’язаний список

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

// додавання нового значення до списку
list = {value: 'new item', next: list};

// Щоб видалити значення з середини, змінити next попереднього:
list.next = list.next.next;

console.log(list);



// Завдання

// Сума всіх чисел до даного

// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
// Наприклад:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Зробити 3 варіанти рішення:

// 1. Використання циклу.
// 2. Використання рекурсії, у випадку sumTo(n) = n + sumTo(n-1) для n > 1.
// 3. Використання формули арифметичної прогресії.

// function sumTo(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum;
// }
// console.log(sumTo(100));

// function sumTo(n) {
//     // let sum = 0; optimization
//     if (n == 1) {
//         // return sum += n;  
//         return n;  // optimization
//     } else {
//         // return sum = n + sumTo(n-1);
//         return n + sumTo(n-1);  // optimization
//     }
// }
// console.log(sumTo(100));

function sumTo(n) {
    return sum = ((1 + n)/2)*n;
}
console.log(sumTo(100));
    
