class CoffeRecept{

    #coast = 0;
    #sugar = 0;
    volume = 0;

    // constructor(volume = 0, coast = 0) {
    //     this.volume = volume;
    //     this.coffe = 5;
    //     // this.sugar = 0;
    //     // this.coast = 30;
    //     this.#coast = coast;
    // }

    constructor() {

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

    cookingEspresso(mult = 1) {
        this.coffee = 15 * mult;
        this.#coast = 20 * mult;
        this.volume = this.coffee;
    }

    getInfo() {
         return{
            coffe: this.coffee,
            volume: this.volume,
            coast: this.#coast,
            sugar: this.#sugar,
         }
    }
}
const coffe = new CoffeRecept(20, 10);
coffe.addSugar();
console.log(coffe.getSugar(), coffe.coast);


class EspressoRecept extends CoffeRecept{
    // constructor(volume) {
    //    super(volume);
    // }

    constructor() {
        super()
        this.cookingEspresso();
         
    }
}
// const espresso = new EspressoRecept(20);
const espresso = new EspressoRecept();
console.log(espresso);
espresso.addSugar();
console.log(espresso.getInfo());


class AmericanoRecept extends CoffeRecept {
    // constructor(water) {
    //     super(20, 15);
    //     // const espresso = new EspressoRecept(20);
    //     // console.log(espresso);

    //     // this.volume = espresso.volume + water;
    //     // this.coffe = espresso.coffe;

    //     this.water = water;
    //     this.volume = this.volume + water;
    //     // this.coast = this.coast + 10;
    // }

    constructor(water) {
        super();
        this.cookingEspresso();
        this.water = water;
        this.volume = this.coffee + water;
    }

    getInfo() {
        const superInfo = super.getInfo();
        return{
            ...superInfo,
            water: this.water,
        }
    }

    cookingEspresso(mult) {
        // this.volume = this.volume - this.coffe;
        super.cookingEspresso(mult);
        this.volume = this.volume + this.water;
        
    }

    addWater(water) {
        this.water = this.water + water;
        this.volume = this.volume + water;
    }
}
// const americano = new AmericanoRecept(30);
// const americano2 = new AmericanoRecept(50);
const americano = new AmericanoRecept(30);
// americano.setSugar(3);
console.log(americano);
americano.cookingEspresso(2);
console.log(americano);

americano.addWater(400);
f
// americano.cookingEspresso(3);
console.log(americano.getInfo());
// console.log(americano2);
// console.log(americano.coast, americano2.coast);
// console.log(americano.getSugar(), americano2.getSugar());


class LatteRecept extends CoffeRecept {
    constructor(milk) {
        super(20, 20);
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
latte.setSugar(2)
console.log(latte.coast);
console.log(latte.getSugar());


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

