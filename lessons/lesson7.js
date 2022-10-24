// ООП

class Animal {

    #name;
    #age;
    constructor(name, age, sex) {
        this.#name = name;
        this.age = age; // викликає сеттер
        this.sex = sex;

    }

    sayHi(name) {
        console.log('hi', name);
        console.log(this.name);
        console.log(this);
    }

    // getName() {
    //     return this.#name;
    // }

    // setName(value) {
    //     this.#name = value;
    // }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 18) {
            console.log('you so young')
            return; 
        }
        this.#age = value;
    }
}

const animal = new Animal('Vasya', 45, 'femael');
const animal1 = new Animal('Petya', 23, 'mael');

animal.sayHi('Petya'); 
animal1.sayHi('test');

// for (const key in animal) {
//     console.log(key, animal[key]);
// }
// console.log(animal);

class Cat extends Animal {
    
    constructor(name, age, sex) {
        super(name, age, sex);
    }

    sayHi(name) {
        super.sayHi(name);
        console.log(name, 'cat, hi');
    }
}

const cat = new Cat('Cat', 33);
cat.sayHi('world');
// console.log(cat);
// console.log(cat.getName());
// cat.setName('Dog');
// console.log(cat.getName());
console.log(cat.age);

console.log(typeof cat); //object
console.log(typeof Cat); //function

