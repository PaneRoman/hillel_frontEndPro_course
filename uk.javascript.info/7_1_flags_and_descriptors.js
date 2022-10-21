// Прапори властивостей
let user = {
    name: 'Ivan',
    age: 42,
};

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "Іван",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


// Не для запису

// Зробімо user.name недоступним для запису (недоступним для переприсвоєння),
// змінюючи writable прапор:

Object.defineProperty(user, 'name', {writable: false});
user.name = 'Petr';
console.log(user);
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));


// Неперелічувана властивість

// Тепер додаймо кастомний toString до user.

// Зазвичай, вбудований toString для об’єктів неперелічуваний,
// тобто він не з’являється в for..in.
// Але якщо ми додамо свій власний toString, то за замовчуванням він з’являється в for..in:
let user2 = {
    name: 'Roma',
    toString() {
        return this.name;
    }
};
// за замовчуванням, вказані обидві наші властивості:
for (const key in user2) {
    console.log(key); // name, toString
}
// Якщо нам це не подобається, то ми можемо встановити enumerable:false.
// Тоді toString не з’явиться в for..in так само, як вбудований метод.
Object.defineProperty(user2, 'toString', {enumerable: false});

for (const key in user2) {
    console.log(key); // name
}

// Неперелічувані властивості також виключаються з Object.keys:
console.log(Object.keys(user2));


// Неналаштовувані властивості

// Прапор неналаштовуваної властивості (configurable:false)
// іноді встановлений для вбудованих об’єктів та властивостей.

// Неналаштовувана властивість не може бути видалена,
// її атрибути не можуть бути змінені.

// Наприклад, властивість Math.PI доступна тільки для читання,
// неперелічувана і неналаштовувана:

let descriptor2 = Object.getOwnPropertyDescriptors(Math, 'PI');
// console.log(JSON.stringify(descriptor2, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
// Отже, програміст не може змінити значення Math.PI або перезаписати його.
// Ми також не можемо змінити властивість Math.PI, щоб вона знову була writable:

// Object.defineProperty(Math, "PI", { writable: true });

// Абсолютно нічого не можна зробити з Math.PI.

// Створення неналаштовуваної властивості – це дорога в один кінець.
// Ми не можемо змінити цю властивість з defineProperty.

// Зверніть увагу: configurable: false не дозволяє зміну чи видалення прапорів властивості,
// однак дозволяє змінювати значення властивості.
// Тут user.name неналаштовувана властивість,
// але ми все ще можемо змінити її (бо вона доступна для запису):
let user3 = {
    name: 'Ivan',
};

Object.defineProperty(user3, 'name', {
    writable: false,
    configurable: false, // тепер не можливо змінювати user.name чи її прапори
});

user3.name = 'Petr';
// delete user3.name;
console.log('user3', user3); // працює добре
delete user.name; // Помилка