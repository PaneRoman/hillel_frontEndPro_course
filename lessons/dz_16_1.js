const SIZE_SMALL = {title: 'SMALL', coast: 50, cal: 20};
const SIZE_LARGE = {title: 'LARGE', coast: 100, cal: 40};
const STUFFING_CHEESE = {title: 'CHEESE', coast: 10, cal: 20};
const STUFFING_SALAD = {title: 'SALAD', coast: 20, cal: 5};
const STUFFING_POTATO = {title: 'POTATO', coast: 15, cal: 10};
const TOPPING_SPICE = {title: 'SPICE', coast: 15, cal: 0};
const TOPPING_MAYO = {title: 'MAYO', coast: 20, cal: 5};


 
class Hamburger {

    constructor(stuffing) {
        this.coast = stuffing.coast;
        this.cal = stuffing.cal;
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
        this.coast = this.coast + topping.coast;
        this.cal = this.cal + topping.cal;
    }

    getCoast() {
        return this.coast + 'tug';
    }

    getCal() {
        return this.cal + 'cal';
    }
        

}

class CheeseBurger extends Hamburger {
    constructor(size) {
        super(STUFFING_CHEESE);
        this.size = size.title;
        this.coast = this.coast + size.coast;
        this.cal = this.cal + size.cal;
    }
}

let cheeseBurger = new CheeseBurger(SIZE_SMALL);
console.log(cheeseBurger);
cheeseBurger.addTopping(TOPPING_SPICE);
console.log(cheeseBurger);


console.log(cheeseBurger.coast , cheeseBurger.cal);