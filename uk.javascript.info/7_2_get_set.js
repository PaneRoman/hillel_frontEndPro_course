// Гетери і сетери властивостей

// Властивості аксесорів представлені методами “гетер” та “сетер”.
// У об’єкті вони буквально позначаються як get і set:
let obj = {
    get propName() {
        // гетер, код виконано під час отримання obj.propName
    },

    set propName(value) {
        // сетер, код виконано під час встановлення obj.propName = value
    }
}

// Гетер працює, коли obj.propName зчитується, сетер – коли він призначається.
// Наприклад, у нас є об’єкт user з name і surname:
let user = {
    name: 'Taras',
    surname: 'Melnik',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ')
    }
};
user.fullName = 'Alisa Bondar';
console.log(user.fullName);
console.log(user.name);
console.log(user.surname);
console.log(user);

// Тепер ми хочемо додати властивість fullName, яка повинна бути "Тарас Мельник".
// Звичайно, ми не хочемо копіювати інформацію, що існує, тому ми можемо реалізувати її як аксесор:

// Ззовні аксесор виглядає як звичайна властивість. В цьому і є ідея аксесорів властивостей.
// Ми не викликаємо user.fullname як функцію, ми читаємо її як звичайну властивість: гетер виконає свою роботу за кулісами

// Зараз fullname має тільки гетер.
// Якщо ми намагаємося присвоїти user.fullName=, буде помилка:

// user.fullName = 'Test'; // Помилка (властивість має лише гетер)
// Виправимо це, додавши сетер для user.fullName:


// Розумні гетери/сетери
let user2 = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Ім’я занадто коротке, потрібно щонайменше 4 символи");
            return
        }
        this._name = value;
    }
};
user2.name = 'Petro';
console.log(user2);
console.log(user2.name);


// Використання для сумісності

// Одним з чудових прикладів використання аксесорів полягає у тому,
// що вони дозволяють контролювати “звичайну” властивість даних в будь-який момент,
// замінюючи її гетером і сетером і налаштовуючи її поведінку.

// Уявіть, що ми почали реалізувати об’єкти користувача
// за допомогою властивостей даних name та age:

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let john = new User('Ivan', 25);
// console.log(john.age); 

// …Але рано чи пізно, речі можуть змінюватися.
// Замість age ми можемо вирішити зберігати birthday,
// тому що це точніше і зручніше:

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
// }

// let john = new User('Ivan', new Date(1992, 6, 1));
// console.log(john.birthday); 

// Тепер, що робити зі старим кодом,
// який все ще використовує властивість age?

// Ми можемо спробувати знайти всі такі місця та виправити їх,
// але це вимагає часу, і це може бути важко зробити,
// якщо цей код використовується багатьма іншими людьми. І, крім того, age – це гарна властивість для user, правильно?

// Залишмо його.
// Додавання гетера для age розв’язує проблему:

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // вік розраховується з поточної дати та дня народження
    Object.defineProperty(this, 'age', {
       get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
       } 
    })
}

let john = new User('Ivan', new Date(1992, 6, 1));
console.log(john.birthday); 
console.log(john.age);