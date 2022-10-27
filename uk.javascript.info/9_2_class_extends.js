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
    hide() {
        console.log(`${this.name} ховається!`);
    }
}

let rabbit = new Rabbit("Білий Кролик", 10);
console.log(rabbit);
rabbit.run(5);
rabbit.stop();
