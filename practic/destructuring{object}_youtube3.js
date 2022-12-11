// Деструктуризация объектов. Фундаментальный JavaScript
// https://www.youtube.com/watch?v=mbov4Rs0F3k

const myObj = {
    a: 1,
    b: 2,
    c: {
        a: 2,
        b: 10
    },
    d: 4,
    n: [1, 5, 3]
};

// const myObj = undefined;

const {
    d: myName = 0,  // d: myName - переименовываем d, чтоб избежать конфликта
    a: firstA = 0,   // при одинаковых наименованиях. Так же как и с массивами возможны значения по умолчанию
    c: {
        a: secondA = 0 // a: secondA - переименовываем a, чтоб избежать конфликта
    } = {}, // {} пустой обьект нужен, чтоб внутр. дистр. работала нормально,
            // если объект окажется пустым   

    n: [, deep = 0, ...tailDeep] = [], // [] пустой массив нужен, чтоб внутр. дистр. работала нормально,
                                        // если объект или массив окажутся пустьіми             
    ...tail4           
    
} = myObj || {}; //  || {} - for well work, if Object was undefined

let a, b; // Можно переменные объявить заранее. Тогда директива const не нужна, но..
// {a, b} = myObj; // такой синтаксис будет восприниматься как блок кода в ковычках { }, который есть во многих конструкциях
// типа if else, for, function. Поэтому будет выдаваться ошибка!
({a, b} = myObj); // такая запись будет нормально работать
console.log('a>>', a, 'b>>', b);

console.log('myName>>', myName, 'firstA>>', firstA, 'secondA>>', secondA, 'deep>>', deep, tailDeep, tail4);

// Одно из применений диструктуризации в параметрах функции
function fn1({key1, key2}) {}

function fn2([item1, item2]) {}