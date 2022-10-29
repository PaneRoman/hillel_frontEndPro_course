class Animal {
    constructor(name, age) {
        this.speed = 0;
        this.name = name;
        this.age = age;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} біжить зі швидкістю ${this.speed}`);
        console.log(this);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} стоїть`);
    }
}

let animal = new Animal("Моя тварина", 5);
console.log(animal)
animal.run(50)
animal.stop()

class Rabbit extends Animal {
    constructor(name, age, earLength, earColor) {
        super(name, age);
        this.earLength = earLength + 'cm';
        this.earColor = earColor;
    }

    hide() {
        console.log(`${this.name} ховається!`);
    }

    // stop() {
    //     this.speed = 0.1;                               // ...тепер цей метод буде використано для rabbit.stop() 
    //     console.log(`${this.name}  стоїть  стоїть`);    // замість stop() з класу Animal
        
    // }

    stop() {                                            // Зазвичай ми не хочемо повністю замінити батьківський метод,
        super.stop();// викликає батьківський stop      // але, радше побудувати метод на його основі, щоб налаштувати або розширити функціональність. 
        this.hide();// а потім ховається                // Ми робимо щось у нашому методі, але викликаємо батьківський метод до/після нього або в процесі.
    }                                                   // Для цього в класах використовують ключове слово "super"

                                                        // super.method(...), щоб викликати батьківський метод.
                                                        // super(...), щоб викликати батьківський конструктор (лише в нашому конструкторі).
                                                        // Наприклад, нехай наш кролик автоматично ховається, коли зупиняється
}

let rabbit = new Rabbit("Білий Кролик", 10, 25, 'white');
console.log(rabbit);
rabbit.run(5);
rabbit.stop();


// Перевизначення методу

// Тепер рухаймося вперед і перевизначимо метод. Типово, всі методи,
// які не вказані в class Rabbit, беруться безпосередньо “як є” від класу Animal.

// Але якщо ми вкажемо наш власний метод в Rabbit,
// наприклад, stop(), то він буде використовуватися замість методу з класу Animal


// Перевизначення конструктора



