// 14. знакомство с Ajax. XMLHttpRequest. fetch. 
// Cookies. Работа с Cookies в JS. LocalStorage. SessionStorage.
// Обзор уявзвимостей XSS, CORS. JSON


//**JSON

// const myJSON = `{
//     "array": [
//         1,
//         2,
//         3
//     ],
//     "boolean": true,
//     "color": "gold",
//     "null": null,
//     "number": 123,
//     "object": {
//         "a": "b",
//         "c": "d"
//     },
//     "string": "Hello World"
// }`;

// const jsonObj = JSON.parse(myJSON);
// const jsonString = JSON.stringify(jsonObj);

// console.log('jsonObj>>>', jsonObj);
// console.log('jsonString>>>', jsonString);


//**** Pri pomowi JSON, esli nugno, mogno skopirovat' Object
const myJSON = {
    "array": [
        1,
        2,
        3
    ],
    "boolean": true,
    "color": "gold",
    "null": null,
    "number": 123,
    "object": {
        "a": "b",
        "c": "d"
    },
    "string": "Hello World"
};

// const myJsonString = JSON.stringify(myJSON);
// const cloneMyJSON = JSON.parse(myJsonString);

const cloneMyJSON = JSON.parse(JSON.stringify(myJSON));
console.log('cloneMyJSON>>', cloneMyJSON);

console.log(myJSON == cloneMyJSON, myJSON.array == cloneMyJSON.array, myJSON.object == cloneMyJSON.object); //false false false
// Podobnoe kopirovanie s'edaet mnogo resursov PC, poetomy ne sovetyetsa delat' ego chasto !!!


//**XMLHttpRequest
// https://uk.javascript.info/xmlhttprequest

// Ось повний приклад. 
// Наведений нижче код завантажує /article/xmlhttprequest/example/load із сервера та показує хід завантаження:

// 1. Створюємо новий об’єкт XMLHttpRequest
let xhr = new XMLHttpRequest();
console.log('xhr>>', xhr);

// 2. Налаштовуємо його: GET-запит для URL-адреси http://jsonplaceholder.typicode.com/todos/1
xhr.open('GEt', 'http://jsonplaceholder.typicode.com/todos/1');

// xhr.responseType = 'json'; // dozvoljae отримати як JSON (автоматичний аналіз). Otrimuemo vge razparseniu object !!!

// 3. Відправляємо запит мережею
xhr.send();

// 4. Код нижче буде виконано після отримання відповіді
xhr.onload = function() {
    if (xhr.status != 200) {// аналізуємо HTTP-статус відповіді
        alert(`Помилка ${xhr.status}: ${xhr.statusText}`);// наприклад 404: Не знайдено
    } else {
       alert(`Запит завершено, отримано ${xhr.response.length} байт. STATUS ${xhr.status}: ${xhr.statusText}`); // властивість `xhr.response` містить відповідь сервера 
    }

    console.log('responseXHR>>>', JSON.parse(xhr.response));
    
};

xhr.onprogress = function (event) {
    console.log('XMLHttpRequestEvent>>>', event);
    if (event.lengthComputable) {
        alert(`Отримано ${event.loaded} із ${event.total} байт`);
    } else {
        alert(`Отримано ${event.loaded} байт`);// якщо сервер не надіслав заголовок Content-Length
    }
};

xhr.onerror = function() {
    alert(`Не вдалося виконати запит`);
};



//**Fetch

// Getting a resource
const fetchResponse = fetch('http://jsonplaceholder.typicode.com/todos/1');
console.log('fetchResponse', fetchResponse);

fetchResponse
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log('dataFetch>>', data);
    })
    .catch((err) => {
        console.warn('Error>>>', err);
    });


// Creating a resource
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'too',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'applicition/json; charset=UTF-8'
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log('data2>>', data2);
    })

