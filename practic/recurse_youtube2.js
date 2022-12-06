// Рекурсия в JavaScript на простых примерах, хватит ее бояться!
// https://www.youtube.com/watch?v=bh5TKVync9M

let t = 0;
function f1() {
    t++;
    console.log(t);
    if (t === 100) {
        return;
    }
    f1();
}
// f1();


// Реализация задач циклом и рекурсией(переписываем цикл на рекурсию)
//Цикл
function f2() {
    let out = '';
    for (let i = 0; i <= 30; i++) {
        out += i + ' ';
        
    }
    console.log(out);
}
// f2();


// Простая Рекурсия
let i = 0;
let out2 = '';
function f3() {
    i++;
    out2 += i + ' ';
    if (i >= 30) {
        return;
    }
    f3();
}
f3();
console.log('Простая Рекурсия>>', out2);


// Сложная Рекурсия(мой вариант)))
let out3 = '';
let startCount = 31;
// let startCount = 0;

function f4(count) {
    const newCount = --count;
    // const newCount = ++count;
    if (newCount === 0) {
        return newCount;
    }
    // if (newCount === 30) {
    //     return newCount;
    // }
    
    return out3 += f4(newCount) + ' ' + newCount;
    // return out2 += newCount + ' ' + f3(newCount);

}
console.log('Сложная Рекурсия>>', f4(startCount));


// Реализация задач рекурсией и циклом(переписываем рекурсию на цикл)
// Рекурсия
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion() {
    let m = randomInteger(0, 100);
    s1 += m;

    if (s1 >= 300) return;
    moneyRecursion();
}
moneyRecursion();
console.log(s1);

//Цикл
function moneyCycle() {
    let s2 = 0;

    for (let i = 0; s2 <= 300; i++) {
        let m = randomInteger(0, 100);
        s2 += m;
    }
    return s2;
}
console.log(moneyCycle());


//Применение рекурсии в структурах данных
const users = {
    'Ivanov': {
        age: 25,
        parent: {
            'IvanovaT': {
                age: 45
            },
            'IvanovB': {
                age: 43,
                parent: {
                    'SergeevaO': {
                        age: 88,
                        parent: {
                            'LionenkoV': {
                                age: 120
                            }
                        }
                    },
                    'SergeevD': {
                        age: 100
                    }
                }
            }
        }
    }, 

    'Kostenko': {
        age: 56,
        parent: {
            'IgnatenkoA': {
                age: 90
            },
            'SniezkoR': {
                age: 90
            }
        }
    }
}

function userParentRecusion(obj) {
    if (obj.parent !== undefined) {
        for (const key in obj.parent) {
            console.log(key);
            userParentRecusion(obj.parent[key]);
        }
    }
}

for (const key in users) {
    userParentRecusion(users[key]);
}


//Применение рекурсии для анимации

//Cycle
let orangeBlock = document.querySelector('.orange');
let position = 0;

// orangeBlock.addEventListener('click', function () {
//     for (let i = 0; i < 350; i++) {
//         position++;
//         orangeBlock.style.left = position + 'px'; 
//     }
// })

//Recursion
function recursionAnimation() {
    position = position +10;
    if (position > 350) return;
    orangeBlock.style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100)
}

animation();
