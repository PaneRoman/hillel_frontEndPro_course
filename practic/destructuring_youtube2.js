// Деструктуризация массивов. Фундаментальный JavaScript
// https://www.youtube.com/watch?v=qhpqykBJoz4


const numbers = [1, 2, 3, 4, 5];
const [first,, second, ...tail] = numbers;
console.log(first, second, tail); //1 3 [4, 5]


const [one, two, ...etc] = [];
console.log(one, two, etc); //undefined undefined []


const someNumArr = undefined;
// const [elem1, elem2, ...tail2] = someNumArr; //ERROR! //Uncaught TypeError: someNumArr is not iterable
const [elem1, elem2, ...tail2] = someNumArr || []; //OK! //undefined undefined []
console.log(elem1, elem2, tail2);


// Часто встречаемая запись
const numArr = [11, 22, [33, 44], 55, 66, 77]; // [] 



const [
    item1 = 0, //возможны значения по умолчанию
    item2 = 0, //возможны значения по умолчанию
    [deepItem3 = 0, deepItem4 = 0] = [], //возможна вложенная диструктуризация. = [] пустой массив нужен, чтоб
     ...tail3                               //подобная внутр. дистр. работала нормально, если основной массив numArr пустой
] = numArr || [];
console.log(item1, item2, deepItem3, deepItem4, tail3);

// let item1, item2, deepItem3, deepItem4; // Можно переменные объявить заранее. Тогда директива const не нужна
// [
//     item1 = 0,
//     item2 = 0,
//     [deepItem3 = 0, deepItem4 = 0] = [],
//      ...tail3
// ] = numArr || [];


//Использования диструктуризации для свитча значений переменных
let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(x, y);
