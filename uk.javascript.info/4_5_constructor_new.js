// Функція-конструктор

// Технічно, функції-конструктори – це звичайні функції. Однак є дві загальні угоди:
// Ім’я функції-конструктора повинно починатися з великої літери.
// Функції-конструктори повинні виконуватися лише з оператором "new".
// Наприклад:
function User(name, isAdmin, age) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.sayHi = function () {
        console.log('hi');
    }
    console.log(this);
}

let user = new User('Jack', true, 30);
let user2 = new User('Roma', false, 45);

console.log(user.name);
console.log(user.isAdmin);
console.log(user2.sayHi());
console.log(user.sayHi());

// Коли функція виконується з new, відбуваються наступні кроки:

// Створюється новий порожній об’єкт, якому присвоюється this.
// Виконується тіло функції. Зазвичай воно модифікує this, додає до нього нові властивості.
// Повертається значення this.
// Інакше кажучи, виклик new User(...) робить щось на зразок:

function Yser(name) {
    // this = {};  (неявно)
  
    // додає властивості до this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (неявно)
}

// Отже let user = new User("Джек") дає той самий результат, що:
// let user = {
//     name: "Джек",
//     isAdmin: false
//   };


// Завдання

// Дві функції - один об’єкт
// Чи можливо створити функції A та B, щоб new A() == new B()?
function A(name) {
    this.name = name;
    console.log(this);
}

function B(name) {
    this.name = name;
    console.log(this);
}

let a = new A('Anton');
let b = new B('Anton');
console.log(a == b); //false
//
//
let obj = {
    name: 'Sveta',
    age: 24,
    f: function () {
        console.log(this.name, this.age)
    },
}

function C() {
    // console.log(this);
    return obj;
}

function D() {
    // console.log(this);
    return obj;
}

let c = new C();
let d = new D();
console.log(c);
console.log(d);
console.log(c == d); //true


// Створити Калькулятор за допомогою конструктора
// Створіть функцію-конструктор Calculator,
// який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
function Calculator() {
    this.read = function() {
        this.num1 = +prompt('Input First number', 5);
        this.num2 = +prompt('Input Second number', 10);
     };

    this.sum = function() {
        return this.num1 + this.num2;
    };

    this.mul = function() {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
console.log(calculator);
calculator.read();
console.log('num1 + num2', calculator.sum());
console.log('num1 * num2', calculator.mul());


// Створити Accumulator
// Створіть функцію-конструктор Accumulator(startingValue).
// Об’єкт, який він створює повинен:

// -Зберігати “поточне значення” у властивості value.
// Початкове значення має значення аргументу конструктора startingValue.
// -Метод read() повинен використовувати prompt
// для зчитування нового числа та додавати його до value.

// Іншими словами, властивість value – це сума всіх введенних користувачем значень
// разом із початковим значенням startingValue.
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let currentNum = +prompt('Input Number');
        this.value += currentNum;
        
    }
    console.log(this);
}

let accumulator = new Accumulator(1);
console.log('acc:', accumulator.value);
accumulator.read();
accumulator.read();
console.log('acc:', accumulator.value);




