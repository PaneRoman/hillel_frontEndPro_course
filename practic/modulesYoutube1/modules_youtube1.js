// Import Export
// https://youtu.be/L3g0kje6Q8M?t=471

import otmazka from './otmazka.js'; // pri importe defaultniu export mogno nazivat' kak ygodno
import kabluk from './otmazka.js'; // pri importe defaultniu export mogno nazivat' kak ygodno
import otmazka7 from './otmazka.js'; // pri importe defaultniu export mogno nazivat' kak ygodno

import {checkLocalStorage, showMessage} from './cookies.js';

console.log(otmazka('Mathematic'));
console.log(kabluk('Chemestry'));
console.log(otmazka7('History'));

if (!checkLocalStorage()) {
    console.log(showMessage('Problem'));
}