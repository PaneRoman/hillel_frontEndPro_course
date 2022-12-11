// Оператор многоточие (он же spread, он же rest). Фундаментальный JavaScript
// https://www.youtube.com/watch?v=HkQ--STLf2Q

//Spread with massives
const numbers1 = [1, 2 ,3 ,4 ,5];
const numbers2 = [7, 8, 9, 10];

const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);

//Spread with Math
console.log(Math.max(...numbers1));

//Spread with Functions
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...numbers2));


//Spread with Objects
const obj1 = {
    name1: 'Anna',
    age1: 29
}

const obj2 = {
    name2: 'Boris',
    age2: 45
}

const newObjClone = {
    ...obj1
}
console.log('newObjClone>>', newObjClone);

const mergedObj = {
    ...obj1,
    ...obj2
}
console.log('mergedObj>>', mergedObj);


//Rest
function sum(a, b, ...args) {
    let result = a + b;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
        
    }
    return result;
}
console.log(sum(1, 2, 3, 3, 4, 5, 6))

