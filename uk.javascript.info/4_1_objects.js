// Порожній об’єкт (“порожню шафу”) можна створити за допомогою одного з двох синтаксисів:

let user = new Object(); // синтаксис "конструктора об’єктів"

let user2 = {      // синтаксис "літералу об’єкта"
    name: 'Ivan',  // за ключем "name" зберігаємо значення "Іван"
    age: 30,       // за ключем "age" зберігати значення "30"
    'likes birds': true,  // Ім’я властивості з декількох слів повинно бути в лапках
}; 

user2.isAdmin = true;
console.log(user2)
console.log(user2['age'])


// Обчислювані властивості

// // let fruit = prompt('Input name some fruit', 'apple')
// let bag = {
//     [fruit + 'Computers']: 5, // Значення обчислюваної властивості просте: [fruit] означає, що назву властивості слід брати з fruit
// }

// console.log(bag.appleComputers)
// console.log(bag)


// Власти   вість з змінної

function makeUser(name, age) {
    return {
        name, // те ж саме, що name: name
        age,
        isAdmin: true,
        birthday: 29051981  // те ж саме, що age: age
        // ...інші властивості
    }
}

let user3 = makeUser('Roma', 30);
console.log(user3.name, user3.age);
console.log('age' in user3); // true

// Цикл “for…in”
for (const key in user3) {
    console.log(key)
    console.log(user3[key])
}


// Завдання

// Напишіть код, виконавши завдання з кожного пункту окремим рядком:
// 1.Створіть порожній об’єкт user.
// 2.Додайте властивість name зі значенням Іван.
// 3.Додайте властивість surname зі значенням Сміт.
// 4.Змініть значення name на Петро.
// 5.Видаліть властивість name з об’єкта.
let user4 = {};
user4.name = 'Ivan';
user4.surname = 'Smith';
user4.name = 'Petro';
delete user4.name;
// console.log(user4)

// Перевірка на порожнечу
// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// Має так працювати:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "Вставай";
// alert( isEmpty(schedule) ); // false

let schedule = {};

console.log(schedule)

function isEmpty(obj) {
    for (const key in obj) {
        if (key) {
            return false;
        }
    }
    return true;
}
console.log(isEmpty(schedule));
schedule.car = 'Audio';
console.log(isEmpty(schedule));


// Сума властивостей об’єкта
// У нас є об’єкт для зберігання заробітної плати нашої команди:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. 
// У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.
let sum = 0;
for (const key in salaries) {
    sum += salaries[key];
}
console.log(sum); // 390


// Помножте числові значення властивостей на 2
// Створіть функцію multiplyNumeric(obj), 
// яка примножує всі числові властивості об’єкта obj на 2.
// Наприклад:

// до виклику функції
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };
  
// multiplyNumeric(menu);
  
// після виклику функції
//   menu = {
//     width: 400,
//     height: 600,
//     title: "Моє меню"
//   };
//

// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. 
// Слід безпосередньо змінювати об’єкт.
// P.S. Використовуйте typeof для перевірки, що значення властивості числове.

function multiplyNumeric(menu) {
    for (const key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] = menu[key]*2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);