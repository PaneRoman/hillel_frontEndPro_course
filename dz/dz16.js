const SIZE_SMALL = {title: 'SMALL', coast: 50, cal: 20};
const SIZE_LARGE = {title: 'LARGE', coast: 100, cal: 40};
const STUFFING_CHEESE = {title: 'CHEESE', coast: 10, cal: 20};
const STUFFING_SALAD = {title: 'SALAD', coast: 20, cal: 5};
const STUFFING_POTATO = {title: 'POTATO', coast: 15, cal: 10};
const TOPPING_SPICE = {title: 'SPICE', coast: 15, cal: 0};
const TOPPING_MAYO = {title: 'MAYO', coast: 20, cal: 5};


 
class Hamburger {

    #coast;
    #cal;

    constructor(size, stuffing) {
        this.size = size.title;
        this.stuffing = stuffing.title;
        this.#coast = size.coast + stuffing.coast;
        this.#cal = size.cal + stuffing.cal;
    }

    addTopping(topping) {
        if (!this.topping) {
            this.topping = [];
        }
        this.topping.push(topping.title);
        this.#coast += topping.coast;
        this.#cal += topping.cal;
    }

    removeTopping(topping) {
        let index = this.topping.indexOf(topping.title);
        this.topping.splice(index, 1);

        this.#coast -= topping.coast;
        this.#cal -= topping.cal;

        return this.topping;
    }

    get coast() {
        return this.#coast + 'tug';
    }

    get cal() {
        return this.#cal + 'cal';
    }
        

}



let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_SPICE);
console.log(hamburger);
console.log(`Calories: ${hamburger.coast}`, `Coast: ${hamburger.cal}`);
// hamburger.removeTopping(TOPPING_SPICE);
console.log(`Calories: ${hamburger.coast}`, `Coast: ${hamburger.cal}`);


