// Клонування та злиття об’єктів, Object.assign
let user = {
    name: 'Ivan',
    age: 30,
};

let clone = {};    // новий порожній об’єкт

// скопіюймо в нього всі властивості з user
for (const key in user) {
        clone[key] = user[key];
}

// тепер клон - це повністю незалежний об’єкт з однаковим вмістом
clone.name = 'Petr'; // змінемо його вміст

console.log(user);
console.log(clone);

// Також ми можемо використати метод Object.assign для цього.
// Наприклад, ми можемо використовувати його для об’єднання кількох об’єктів в один:
let car = {
    model: 'Volvo',
    year: 2008,
    distance: 75000,
}

let user2 = {
    name: 'Roms',
    age: 41,
    birth: 29051981,
}

let carClone = {};

Object.assign(carClone, car, user2, {age: 45});
console.log(car)
console.log(user2)
console.log(carClone)

// Ми також можемо використовувати Object.assign 
// щоб замінити цикл for..in для простого клонування:

let user3 = {
    name: 'Ivan',
    age: 30,
}

let clone2 = Object.assign({}, user3);
console.log('clone2', clone2);
// Він копіює всі властивості user3 у порожній об’єкт і повертає його.

// Існують також інші методи клонування об’єкта, 
// напр. за допомогою оператора розширення clone = {...user}
let user4 = {
    name: 'Igor',
    age: 35,
    sex: 'male',
}

let clone3 = {...user4};
console.log('clone3', clone3);
console.log('user4 == clone3', user4 == clone3); //false


// Вкладене клонування
// До цього часу ми вважали, що всі властивості user є примітивами. 
// Але властивості можуть бути посиланнями на інші об’єкти. Що з ними робити?
// Тепер при клонуванні недостатньо просто скопіювати clone.sizes = user.sizes, 
// тому що user.sizes є об’єктом, і він буде скопійований за посиланням. 
// Тому clone і user у своїх властивостях sizes будуть посилатися на той самий об’єкт:
let user5 = {
    name: 'Sasha',
    age: 50,
    size: {
        height: 182,
        width: 50,
    }
}
console.log('user5', user5);

let clone4 = Object.assign({}, user5);
console.log('clone4', clone4);
console.log(user5.size === clone4.size); //true, той самий об’єкт

// user5 і clone4 мають посилання на єдиний об’єкт у властивості sizes
user5.size.width++; // міняємо властивість з одного місця
user5.size.width++;
console.log(clone4.size.width); // 51, бачимо результат в іншому об’єкті

// Щоб це виправити, слід використовувати цикл клонування, 
// який перевіряє кожне значення user[key], і якщо це об’єкт, 
// то також копіює його структуру. Це називається “глибоким клонуванням”.

// Для його реалізації ми можемо використати рекурсію.
// Або, щоб не винаходити колесо, взяти існуючу реалізацію,
// наприклад _.cloneDeep(obj) з бібліотеки JavaScript lodash.

let clone5 = {};
for (const key in user5) {
    if (typeof user5[key] === 'object') {
        clone5[key] = Object.assign({}, user5[key]);
    }
    clone5[key] = user5[key];
}
console.log('clone5', clone5);
clone5.size.width++;
console.log('clone5.size === user5.size', clone5.size === user5.size);

