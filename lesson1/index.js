
// Homework #1

// 2.1 Привіт, світ!
// Показати сповіщення
// Показати повідомлення із зовнішнього скрипта
alert('I repeat I am Javascript');



// 2.4 Змінні

// Робота зі змінними
let admin;
let name;

name = 'Іван';
admin = name;

alert(admin);

// Придумайте правильні імена
let ourPlanetName;
let currentUserName;

// Використовувати великі чи маленькі букви для імен констант?
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);


// 2.5 Типи даних

// Лапки у рядках
// Який буде результат виконання скрипта?
let name2 = "Ілля";
alert( `привіт ${1}` ); // привіт 1
alert( `привіт ${"name2"}` ); // привіт name2
alert( `привіт ${name2}` ); // привіт Ілля


// 2.6 Взаємодія: alert, prompt, confirm

// Проста сторінка
let yourName = prompt('What is your name?', 'Dmitro');
alert(`Your name is ${yourName}`);


