class Hamburger {

    constructor(size, stuffing) {
        this.size = size.title;
        this.stuffing = stuffing.title;

        this.coast = [size.coast, stuffing.coast];
        this.cal = [size.cal, stuffing.cal];

    }

    static SIZE_SMALL = {title: 'SIZE_SMALL', coast: 50, cal: 20};
    static SIZE_LARGE = {title: 'SIZE_LARGE', coast: 100, cal: 40};
    static STUFFING_CHEESE = {title: 'STUFFING_CHEESE', coast: 10, cal: 20};
    static STUFFING_SALAD = {title: 'STUFFING_SALAD', coast: 20, cal: 5};
    static STUFFING_POTATO = {title: 'STUFFING_POTATO', coast: 15, cal: 10};
    static TOPPING_SPICE = {title: 'TOPPING_SPICE', coast: 15, cal: 0};
    static TOPPING_MAYO = {title: 'TOPPING_MAYO', coast: 20, cal: 5};

    addTopping(topping) {
        if (!this.topping) {
            this.topping = [];
        }

        this.topping.push(topping.title);
        this.coast.push(topping.coast);
        this.cal.push(topping.cal);
    }

    removeTopping(topping) {
        this.topping = this.topping.filter(item => !(item === topping.title));
        this.coast = this.coast.filter(item => !(item === topping.coast));
        this.cal = this.cal.filter(item => !(item === topping.cal));
        
    
        // this.topping.splice(index, 1);
        // let index = this.topping.indexOf(topping.title);
        // this.topping.splice(index, 1);
        // this.#coast -= topping.coast;
        // this.#cal -= topping.cal;

        // return this.topping;
    }

            
    calculatePrice() {
        let price = this.coast.reduce((acc, item) => acc + item, 0);
        return price + ' tug';
    }

    calculateCalories() {
        let calories = this.cal.reduce((acc, item) => acc + item, 0);
        return calories + ' cal';
    }
    
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Price: ' + hamburger.calculatePrice());
console.log('Calories: ' + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log('Price: ' + hamburger.calculatePrice());
console.log('Calories: ' + hamburger.calculateCalories());

// hamburger.removeTopping(Hamburger.TOPPING_MAYO);
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// console.log('Price: ' + hamburger.calculatePrice());
// console.log('Calories: ' + hamburger.calculateCalories());

// console.log(`Coast: ${hamburger.coast}`, `Calories: ${hamburger.cal}`);

console.log(hamburger);


