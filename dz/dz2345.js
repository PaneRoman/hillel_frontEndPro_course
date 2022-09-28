// ДЗ 2. Математичесские операции

// let num1 = Number(prompt('Enter First number, please:', 10));
// let num2 = Number(prompt('Enter Second number, please:', 5));

// alert(`${num1}+${num2}=${num1 + num2}
// ${num1}-${num2}=${num1 - num2}
// ${num1}*${num2}=${num1 * num2}
// ${num1}/${num2}=${num1 / num2}`);



// ДЗ 3. Калькулятор

// let resultQ = confirm('You want to do Addition?');
// let num1, num2

// if (resultQ) {
//     num1 = Number(prompt('Enter First number, please:', 5))
//     num2 = Number(prompt('Entet Second number, please:', 7))
//     alert(`Addition: ${num1}+${num2}=${num1 + num2}`);
    
// } else {
//     resultQ = confirm('You want to do a Subtraction?');
    
//     if (resultQ) {
//         num1 = Number(prompt('Enter First number, please:', 12))
//         num2 = Number(prompt('Entet Second number, please:', 9))
//         alert(`Subtraction: ${num1}-${num2}=${num1 - num2}`);
        
//     } else {
//         resultQ = confirm('You want to do the Multiplication?');

//         if (resultQ) {
//             num1 = Number(prompt('Enter First number, please:', 15))
//             num2 = Number(prompt('Entet Second number, please:', 10))
//             alert(`Multiplication: ${num1}*${num2}=${num1 * num2}`);
            
//         } else {
//             resultQ = confirm('You want to do a Division?')

//             if (resultQ) {
//                 num1 = Number(prompt('Enter First number, please:', 25))
//                 num2 = Number(prompt('Entet Second number, please:', 5))
//                 alert(`Division: ${num1}/${num2}=${num1 / num2}`);
                
//             } 
//         }
//     }
// };



// ДЗ 4. Часы в секунды

// let hours = Number(prompt(`Did you know how much seconds in hour?
// We can calculate for you ;) Enter number of Hours, please`, 24));

// const minutesInHour = 60
// const secondsInMinutes = 60
// let totalCalc = hours*minutesInHour*secondsInMinutes

// alert(`Seconds in ${hours} hour: ${totalCalc}`);



// ДЗ 5. Среднее значение

let num1 = Number(prompt('Enter the First number, please', 10));
let num2 = Number(prompt('Enter the Second number, please', 25));
let num3 = Number(prompt('Enter the Third number, please', 25));

let calculate = (num1+num2+num3)/3

alert(`Srednee arifmiticheskoe: ${calculate}`);