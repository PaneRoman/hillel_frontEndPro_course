class CoffeRecept{

    #coast = 0;
    #sugar = 0;

    constructor(volume = 0, coast = 0) {
        this.volume = volume;
        this.coffe = 5;
        // this.sugar = 0;
        // this.coast = 30;
        this.#coast = coast;
    }

    setSugar(value = 0) {
        this.#sugar = this.#sugar + value;
        this.#coast = this.#coast + value*5;
    }

    addSugar() {
        this.#sugar = this.#sugar + 1;
        this.#coast = this.#coast + 5;
    }

    get coast() {
        return this.#coast;
    }

    getSugar() {
        return this.#sugar;
    }
}
const coffe = new CoffeRecept(20, 10);
coffe.addSugar();
console.log(coffe.getSugar(), coffe.coast);


class EspressoRecept extends CoffeRecept{
    constructor(volume) {
       super(volume);
    }
}

// const espresso = new EspressoRecept(20);


class AmericanoRecept extends CoffeRecept {
    constructor(water) {
        super(20, 15);
        // const espresso = new EspressoRecept(20);
        // console.log(espresso);

        // this.volume = espresso.volume + water;
        // this.coffe = espresso.coffe;

        this.water = water;
        this.volume = this.volume + water;
        // this.coast = this.coast + 10;
    }
}
const americano = new AmericanoRecept(30);
const americano2 = new AmericanoRecept(50);
americano.setSugar(3);
console.log(americano);
console.log(americano2);
console.log(americano.coast, americano2.coast);
console.log(americano.getSugar(), americano2.getSugar());


class LatteRecept extends CoffeRecept {
    constructor(milk) {
        super(20);
        // const espresso = new EspressoRecept(20);
        // console.log(espresso);

        // this.volume = espresso.volume + milk;
        // this.coffe = espresso.coffe;

        this.milk = milk;
        this.volume = this.volume + milk;
        // this.coast = this.coast + 20;
    }
}
const latte = new LatteRecept(30);
console.log(latte);


class DoubleLatteRecept {
    constructor() {
        const firstLatte = new LatteRecept(50);
        const secondtLatte = new LatteRecept(50);
        this.volume = firstLatte.volume + secondtLatte.volume;
        this.coffe = firstLatte.coffe + secondtLatte.coffe;
        this.milk = firstLatte.milk + secondtLatte.milk;
    }
}
const doubleLatte = new DoubleLatteRecept();
console.log(doubleLatte);
