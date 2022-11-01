// ДЗ 15. Создаем сущности

function createHuman() {
    let firstName = prompt(`Input First Name`, `Roman`);
    firstName = checkInput(firstName, 'First Name', `Roman`);

    let secondName = prompt(`Input Second Name`, `Petrov`);
    secondName = checkInput(secondName, 'Second Name', `Petrov`);

    let howOld = prompt('Input Your Age', 41);
    if(howOld < 18) {
        alert('Do you have passport? ;)');
    }

    return new Human(firstName, secondName, howOld);
}

function createCar() {
    let model = prompt(`Input Car Model`, `Nissan`);
    model = checkInput(model, 'Car Model', `Nissan`);

    let age = +prompt('Input Car Age', 12);
    age = checkAge(age, 50);

    let distance = +prompt('Input Car Distance', 25000);
    distance = checkAge(distance, 100000);

    let color = prompt(`Input Car Color`, `Red`);
    color = checkInput(color, 'Car Color', `Red`);

    return new Car(model, age, distance, color);
}

function checkInput(name, nth, input) {
    while (Number(name) || name.trim() === '' || Number(name) === 0) {
        name = prompt(`Can't be empty or a number! Input ${nth}`, `${input}`);
    }
    return name.trim();    
}

function checkAge(num1, num2) {
    if(num1 > num2) {
        alert('OMG! Your car is TRAAAAASH :(');
        return `${num2}+`;
    }
    return num1;
}

class Human {
    constructor(firstName, secondName, howOld) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.howOld = howOld;
    }

    getData() {
        console.log(`fullName:${this.firstName} ${this.secondName}, age: ${this.howOld}year`)
    }
}

let human1 = createHuman();
// let human2 = new Human('Evgeniu', 'Vadimeev', 42);
console.log(human1);
human1.getData();

class Car {
    constructor(model, age, distance, color) {
        this.model = model;
        this.age = age;
        this.distance = distance;
        this.color = color;
    }

    getData() {
        console.log(`model: ${this.model}, age: ${this.age}year, distance: ${this.distance}km, color: ${this.color}`);
    }

    addOwner(human) {
        this.owner = human;
    }
}

let car = createCar();
console.log(car);
car.getData();
car.addOwner(human1);