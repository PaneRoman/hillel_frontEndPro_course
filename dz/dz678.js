// ДЗ 6. switch…case
// Переписать код ниже с использованием конструкции switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('вы отменили')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}


