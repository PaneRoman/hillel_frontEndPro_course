// Bind, call, apply и значение this в Javascript
// (+ вопрос, который я завалил на интервью)
// https://www.youtube.com/watch?v=wU5GJv9lq-I&t=939s


//Primer1

const auto = {
    brand: 'Tesla',
    drive() {
        console.log(this);
        return `Заведем нашу ${this.brand}`;
    }
}

console.log(auto.drive());

const autoDrive = auto.drive.bind(auto);
console.log(autoDrive());


const motorBike = {
    brand: 'Suzuki'
}

// const motorDrive = auto.drive.bind(motorBike);
// const motorDrive = auto.drive.bind({ brand: 'Tank' });

// console.log(motorDrive());



//Primer2

// const header = document.querySelector('.bindCallApply');
// const $ = document.querySelector; 
const $ = document.querySelector.bind(document);

console.log($ === document.querySelector); //true

const header = $('.bindCallApply');
console.log(header); //vidaet Error pri prisvoenie 
// document.querySelector(bez metoda bind()) v $
// xotja console.log($ === document.querySelector) pokazivaet true


//Primer3

// const bill = {
//     tip: 0.1,
//     calculate(total, test) {
//         console.log(this);
//         return total + total * this.tip;
//     }
// }

// const pay = bill.calculate(1000);
// const payCount = bill.calculate.bind(bill);

// const payCount = bill.calculate.bind({ tip: 0.2 });
// console.log(payCount(1000));

// const payCount = bill.calculate.bind({ tip: 0.2 });
// console.log(payCount(1000));

// const payCount = bill.calculate.bind({ tip: 0.2 }, 1000, 20);
// console.log(payCount());
// mogno preredavat` vtorim,i tak dalee argumentom,
// v bind() znachenie dlja ispol`zuemou funkcii

// console.log(pay);



//Call & Apply

// Primer1

const bill = {
    tip: 0.1,
    calculate(total, test) {
        console.log(this);
        return total + total * this.tip;
    },

    detail(dish1, dish2, sum) {
        return `Ваш обед (${dish1}, ${dish2}) стоит ${this.calculate(sum)}`;
    }
}

// const pay = bill.calculate.bind(bill);
// const payCount = bill.calculate.call(bill, 1000); 
// v call() vtorim argumentom peredaetsa znachenir dlja funkcii.
// V otlichie ot bind() srazy poluchaem rezultat v peremennyu payCount

// const payCount2 = bill.calculate.apply(bill, [1000]);
// apply() daet vozmognost' peredavat` argument massivov

// console.log(pay(1000));
// console.log(payCount);
// console.log(payCount2);

//Primer2

const pay = bill.detail('pizza', 'salad', 1000);
// const payCount = bill.detail.call(bill, 'pizza', 'salad', 1000);
const payCount = bill.detail.call(bill, ...['pizza', 'salad', 1000]);
//mogno ispol`zovat` operator ...spread, 4tobi razzvernut` massiv zna4eniu
const payCount2 = bill.detail.apply(bill, ['pizza', 'salad', 1000]);

console.log(pay);
console.log(payCount);
console.log(payCount2);




const user = {
    name: 'Dmitro',
    age: 25,
    sex: 'mael',
    id: 2
}

const fn = function () {
    console.log(this);
    console.log(`${this.name},${this.age},${this.sex},${this.id}`);
}.bind(user);

fn();
// fn()



//Prosto Zada4ka. Nauti Unikalnie zna4enija (zna4enija v edini4nom ekzempljre)
const arr = [1,1,2,3,3,3,4,5,6,6,7];

function findUnique(array) {
    let uniqueObj = {};
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueObj[array[i]]) {
            uniqueObj[array[i]] = 1;
        } else {
            uniqueObj[array[i]] = uniqueObj[array[i]] + 1;
        }
    }

    for (const key in uniqueObj) {
        if (uniqueObj[key] === 1) {
            uniqueArr.push(key)
        }
    }

    return uniqueArr;
}

console.log(findUnique(arr));