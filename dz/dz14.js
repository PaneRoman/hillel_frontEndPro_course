class House {
    constructor(floors, wallType, age, location) {
        this.floors = floors;
        // this.apartQuantity = apartQuantity;
        this.wallType = wallType;
        this.age = age + ' year';
        this.location = location;
    }

    createFlats(quantity) {
            this.flatsQuantity = quantity;
            return this;
    }

}

let house = new House(9, 'brick', 10, 'middletown').createFlats(36);
// console.log(house);

class Flat {
    constructor(rooms, flatType, square, repair, bathrooms, balcony, stat) {
        this.rooms = rooms;
        this.flatType = flatType;
        this.square = square + 'm*2';
        this.repair = repair;
        this.bathrooms = bathrooms;
        this.balcony = balcony;
        this.stat = stat;
        this.tenant = 0;
    }

    createTenant() {
        this.tenant++;
        return this
    }
}

let flat = new Flat(45, 'studio', 50, 'yes', 1, 'none', 'free').createTenant().createTenant().createTenant();
// console.log(flat);

class Tenant {
    constructor(fullName, howOld, flatNumber) {
        this.fullName = fullName;
        this.howOld = howOld;
        this.flatNumber = '#' + flatNumber;
    }
}

let tenant = new Tenant('Roman Petrov', 41, 191);
// console.log(tenant);


// ДЗ 15. Создаем сущности

// let firstName = prompt('Input First Name', 'Roman');
// let secondName = prompt('Input Second Name', 'Petrov');
// let howOld = prompt('Input Your Age', 41);

function createHuman() {
    let firstName = prompt(`Input First Name`, `Roman`);
    firstName = checkInput(firstName, 'First Name', `Roman`);

    let secondName = prompt(`Input Second Name`, `Petrov`);
    secondName = checkInput(secondName, 'Second Name', `Petrov`);

    let howOld = prompt('Input Your Age', 41);
    if(howOld < 18) {
        alert('You so young! Go to mama, and ask her permission ;)');
        return;
    }

    return new Human(firstName, secondName, howOld);
}

function createCar() {
    let model = prompt(`Input Car Model`, `Nissan`);
    checkInput(model, 'Car Model', `Nissan`);

    let age = +prompt('Input Car Age', 12);
    checkAge(age, 50);

    let distance = +prompt('Input Car Distance', 25000);
    checkAge(distance, 100000);

    let color = prompt(`Input Car Color`, `Red`);
    checkInput(model, 'Car Color', `Red`);

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
        return;
    }
}

// let firstName = prompt('Input First Name', 'Roman');
// let secondName = prompt('Input Second Name', 'Petrov');
// let howOld = prompt('Input Your Age', 41);

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