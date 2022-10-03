// function test (a, b = anotherFunction()) {
    
    
//     // if (!b) {
//     //     return a
//     // }

//     return a+b;
// }

// function anotherFunction() {
//     return 10;
// }

// console.log(test);


// let sayHi = function () {
//     alert('Hi!')
// };

// sayHi();



// const a = 5;
// const b = 7;
// console.log(a || b); // 5   //vozvrawaet pervoe popavwee TRUSY zna4enie

// const a = null;
// const b = 7;
// console.log(a || b); // 7   //vozvrawaet pervoe popavwee TRUSY zna4enie

// const a = 4;
// const b = null;
// console.log(a || b); // 4   //vozvrawaet pervoe popavwee TRUSY zna4enie


// const a = 5;
// const b = 7;
// console.log(a && b); // 7   //vozvrawaet vtoroe zna4enie, esli pervoe TRUSY. ili pervoe zna4enie esli ono FALSY

// const a = 'hhh';
// const b = null;
// console.log(a && b); // null  //vozvrawaet vtoroe zna4enie, esli pervoe TRUSY. ili pervoe zna4enie esli ono FALSY

// const aa = undefined;
// const bb = 78;
// console.log(aa && bb); // undefined  //vozvrawaet vtoroe zna4enie, esli pervoe TRUSY. ili pervoe zna4enie esli ono FALSY


// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;    
// } while (i < 10);


// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// const numbs = [25, 36, 98, 456]

// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
// }

// const numbs = [[34, 45, 25, 11], [88, 69, 48, 22], [74, 56, 92, 31], [24, 36, 72, 16]]

// for (let i = 0; i < numbs.length; i++) {
//     for (let j = 0; j < numbs[i].length; j++) {
//         console.log(i, j, numbs[i], numbs[i][j])
//     }
    
// }

// for (let value of numbs) {
//     console.log(value);
// }


// const an_obj = {
//     '3': 123,
//     '1': 456,
//     '5': 789,
//     '9': 444,
// }

// console.log(an_obj[3])

// for (let i = 0; i < Object.keys(an_obj).length; i++) {
//     console.log(i, Object.keys(an_obj)[i], Object.keys(an_obj), an_obj[Object.keys(an_obj)[i]])
// }

// for (let key in an_obj) {
//     console.log(key, an_obj[key]);
// }


// const n = [2, 3, 6, 8, 4, 1,];

// function min(arr) {
//     let result = arr[0];

//     for (let value of arr) {
//         if (value < result) {
//         result = value;
//       }

//     }

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] < result) {
    //     result = arr[i];
    //   }
    // }

//     return result;
// }

// function max(arr) {
//     let result = 0;

//     for (let value of arr) {
//        if (value > result) {
//         result = value;
//        } 
//     }

//     return result;
// }

// function averenge(arr) {
//     let result = 0;

//     for (let value of arr) {
//         result = result + value;
//     }

//     return result/arr.length;
// }

// console.log(min(n));
// console.log(max(n));
// console.log(averenge(n));



const n = [2, 3, 6, 8, 4, 1,];

function maxmin(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let val of arr) {
        if (val < min) {
            min = val;
        }
        if (val > max) {
            max = val;
        }
    }

    console.log(`min:${min}, max:${max}`);
}

maxmin(n)

