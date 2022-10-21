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
console.log(User.prototype.sayHi);