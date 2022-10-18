// Методи об’єкту, "this"

// Об’єкти зазвичай створюються для представлення сутностей реального світу, 
// таких як користувачі, замовлення тощо:
let user = {
    name: 'Ivan',
    age: 30,
};

// І в реальному світі користувач може діяти: вибрати щось із кошика для покупок,
// авторизуватися, виходити із системи тощо.

// Дії представлені в JavaScript функціями у властивостях об’єкта.


// Приклади методів
// Для початку навчімо user вітатися:
user.sayHi = function () {
    console.log('Hi');
};

console.log(user)

// Скорочений запис методу
// Існує коротший синтаксис для методів в літералі об’єкта:

// Звичайний запис методу
let user2 = {
    sayHi: function () {
        console.log('Hello');
    }
};
user2.sayHi();

// скорочений метод виглядає краще, чи не так?
let user3 = {
    sayHi(){
        console.log('Shalom');
    }
};
user3.sayHi()


// “this” в методах

let user4 = {
    name: 'Roma',
    age: 30,
    func: function () {
        return 'Wow'
    },

    sayHi(){
        console.log(this.func());
        console.log(this);
    }
};

let admin = user4;
user4 = null;

// admin.sayHi();

// “this” не являється фіксованим
// Значення this обчислюється під час виконання і залежить від контексту.
// Наприклад, тут одна й та ж функція призначена двом різним об’єктам
// і має різний “this” при викликах:

let user5 = {name: 'Ivan'};
let admin2 = {name: 'Admin'};

function sayHi() {
     console.log(this.name);
     console.log(this);
}

// використовуємо одну і ту ж функцію у двох об’єктах
user5.f = sayHi;
admin2.f = sayHi;
// виклики функцій, приведені нижче, мають різні this
// "this" всередині функції являється посиланням на об’єкт "перед крапкою"
user5.f(); // Іван  (this == user)
admin2.f(); // Адмін  (this == admin)

// (неважливо те, як звертатися до методу об’єкта -- через крапку чи квадратні дужки)
admin2['f']();  // Адмін


// Виклик без об’єкта: this == undefined
// Ми можемо навіть викликати функцію взагалі без об’єкта:
function sayHello() {
    console.log(this);
}
sayHello(); // Object Window


// Завдання
// Використання "this" в об’єктному літералі
function makeUser() {
    return {
        name: 'Ivan',
        ref: this,
    }
}

let user6 = makeUser();
console.log(user6.ref.name) // Error: Cannot read property 'name' of undefined

// Ось протилежний випадок:
function makeUser2() {
    return {
        name: 'Ivan',
        ref() {
            return this;
        },
    };
}

let user7 = makeUser2();
console.log(user7.ref().name); // Іван


// Створіть калькулятор
// Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

let calculator = {
    read() {
        this.a = +prompt('First number', 5);
        this.b = +prompt('Second number', 7);
        console.log(this);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log('a + b', calculator.sum());
console.log('a * b', calculator.mul());


// Ланцюг викликів
// Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:
let ladder = {
    step: 0,
    up() {
        this.step++;
        console.log(this.step);
        // return this;
    },

    down() {
        this.step--;
        console.log(this.step);
        // return this;
    },

    showStep: function () {
        console.log('showStep', this.step);
        // return this;
    }
};
// Тепер, якщо нам потрібно зробити кілька викликів послідовно,
// можна зробити це так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); //1
ladder.down();
ladder.showStep(); //0
// Змініть код up, down і showStep так,
// щоб зробити доступним ланцюг викликів, наприклад:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

