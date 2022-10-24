// Синтаксис “class”

class MyClass {
    // методи класу
    constructor() {

    }
    method1() {

    }
    method2() {

    }
    method3() {

    }
    // ...
}
// Потім використовуйте new MyClass(),
// щоб створити новий об’єкт з усіма перерахованими методами.

// Метод constructor() викликається автоматично за допомогою new,
// в ньому ми можемо ініціалізувати об’єкт.

// Наприклад:
class User {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    sayHi() {
        console.log('Hi, ' + this.name);
        console.log(this);
    }
    sayHello() {
        console.log('Hello, ' + this.name);
    }
}

let user = new User('Ivan', 45, 'mael');
user.sayHi();
user.sayHello();
// console.log(User.prototype.sayHi);


// Геттери/сеттери

// Подібно до літералів об’єктів, класи можуть включати геттери/сеттери,
// обчислені атрибути тощо.

// Ось приклад для user.name, що реалізований  за допомогою get/set:

class User1 {
    sex = 'mael'; // “Поля класу” – це синтаксис,
    //який дозволяє додавати будь-які властивості.
    // Отже, ми просто пишемо <property name> = <value> в оголошенні, і все.

    constructor(name, age) {
        this.name = name; // викликає сеттер
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Ім’я занадто коротке.');
            return;
        }
        this._name = value;
    }

    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

let user1 = new User1('Dmitry', 25);
console.log(user1.name);
user1.name = 'Petro'
console.log(user1.name);
console.log(user1.age);
user1.sayHi();
console.log(user1);


// Створення методів, що пов’язані з полями класу

