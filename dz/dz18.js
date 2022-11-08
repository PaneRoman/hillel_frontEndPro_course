class SuperMath {

    // static obj = {}
   obj = {};
   znaks = '+-/*%';
   res = 0;

    constructor() {
        
    }

    check(obj) {
        this.obj.x = obj.x;
        this.obj.y = obj.y;
        this.obj.znak = obj.znak;

        if (confirm(`Do you want ${this.obj.x}${this.obj.znak}${this.obj.y} ?`)) {
            // let res = 0
            if(this.obj.znak === '+') this.res = this.doAddition();
            if(this.obj.znak === '-') this.res = this.doSubtraction();
            if(this.obj.znak === '*') this.res = this.doMultiplication();
            if(this.obj.znak === '/') this.res = this.doDivision();
            if(this.obj.znak === '%') this.res = this.doRemainder();

            console.log(`${this.obj.x}${this.obj.znak}${this.obj.y}, ${this.res}`)

        } else {
            this.input();
            this.check(this.obj);
        }
        
    }

    input() {
        this.obj.x = Number(prompt('Input X number', 12));
        this.obj.y = Number(prompt('Input Y number', 3));
        this.obj.znak = prompt('Input ZNAK(+,-,/,*,%)', '*');

        while (!(this.znaks.includes(this.obj.znak))) {
            this.obj.znak = prompt('Input correct ZNAK(+,-,/,*,%)')
        }

        console.log(this.obj);
    }

    doAddition() {
        return this.obj.x + this.obj.y;
    }

    doSubtraction() {
        return this.obj.x - this.obj.y;
    }

    doMultiplication() {
        return this.obj.x * this.obj.y;
    }

    doDivision() {
        return this.obj.x / this.obj.y;
    }

    doRemainder() {
        return this.obj.x % this.obj.y;
    }
    
    
}


let obj = {x: 5, y: 5, znak: "*"}

let newMath = new SuperMath();
newMath.check(obj)
// newMath.input();

console.log(newMath);