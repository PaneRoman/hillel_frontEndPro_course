// const mainN = prompt('Введите длинну главного массива');
// const subN = prompt('Введите длинну внутренних массивов');

// const arr = new Array(+mainN).fill(0)
//     .map((_, ind) => new Array(+subN).fill(0)
//     .map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));

// console.log(arr)

// let arr = [];
// for (let i = 0; i < mainN; i++) {
//     arr.push([]);
//     for (let j = 0; j < subN; j++) {
//         arr[i].push(Math.floor(Math.random() * (100 - 1)) + 1)
        
//     }
// }
// console.log(arr)



// function test(a,b) {
//     const a = arguments[0];
//     const b = arguments[1];

//     console.log(a,b,arguments);
// }
// test(1,2,3,4,5,6,7,8)

function test(a,b,d,s, ...args) {
    
    console.log(a,b,args);
}
// test(1,2,3,4,5,6,7,8,'gjgj',456,234,5,76,890)

// let userArr = new Array(+prompt('Vvedite dlinnu massiva')).fill(0);

// for (let i = 0; i < arrLength; i++) {
//     userArr[i] = +prompt('vvedite element massiva')
    
// }
    
// console.log(userArr);


// delete min
// Input: [1,2,3,4,5], output: [2,3,4,5]
// Input: [5,3,2,1,4], output: [5,3,2,4]
// Input: [2,2,1,2,1], output: [2,2,2,1]

function deleteMin(arr) {
    let min = Math.min(...arr);
    let index = arr.indexOf(min);
    arr.splice(index, 1);

    return arr
}

console.log(deleteMin([1,2,3,4,5]));
console.log(deleteMin([5,3,2,1,4]));
console.log(deleteMin([2,2,1,2,1]));


// Перевернуть каждое второе слово в заданной строке, а затем вернуть строку.
// Отбросьте все начальные или конечные пробелы, убедившись, что между каждым словом есть ровно один пробел.
// Знаки припинания следует рассматривать так, как если бы они были частью слова в этой кате.

function reverseSecondWord(string) {
    const dirtyWords = string.split(' ');
    console.log(dirtyWords);
    const words = dirtyWords.filter(function (item) {
        return !!item;   // item приводится к boolean значению. через два знака !! item приводится к boolean значению более явно
        
    });
    console.log(words)
    
    for (let i = 1; i < words.length; i+=2) {
        words[i] = words[i].split('').reverse().join('');
    }
    console.log(words)

    return words.join(' ');
    
}

console.log(reverseSecondWord(' Я     люблю   учить            JavaScript. Он такой  же как  и EcmaScript '));