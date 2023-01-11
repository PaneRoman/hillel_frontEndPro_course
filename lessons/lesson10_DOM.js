// console.dir(document)


const myPref = document.getElementById('myP');
const myPsRef = document.getElementsByTagName('p');

const sel = document.querySelector('#myP');
const paragraph = document.querySelector('.paragraph')

const arrP = [...myPsRef]

// console.log(arrP);
// console.log(myP);
console.log(paragraph);

myP.innerText = 'test text';
myP.innerHTML = '<div>fffffff</div>';
paragraph.innerText = 'Hello!';
paragraph.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

// sel.classList.add('green');
// sel.classList.remove('green');

// const mySpan = document.createElement('span');
// mySpan.innerText = 'tst'
// mySpan.classList.add('myClass');

// const mySpan1 = document.createElement('span');
// mySpan1.innerText = 'testt'

// mySpan.appendChild(mySpan1);
// sel.appendChild(mySpan);

// // console.dir(mySpan.innerHTML);
// console.dir(sel.dataset.tested);


const btnRef = document.createElement('button');

btnRef.setAttribute('name', 'helloButton');
// btnRef.setAttribute('disabled', '');
btnRef.setAttribute('type', 'submit');
btnRef.setAttribute('data-numb', '4');

btnRef.innerText = 'Click me!';
btnRef.addEventListener('click', clickHandler)
document.body.appendChild(btnRef);

function clickHandler(event) {
    console.log(event)
    // console.log('click', arguments);
    console.log(event.target.attributes);

    console.log(event.target.getAttribute('type'));
    // console.log(btnRef.getAttribute('type'));
    // btnRef.removeEventListener('click', clickHandler);
}


// const divRef = document.querySelector('div')
// const divsRef = divRef.querySelectorAll('div');
// console.log(divsRef);

const divsRef = [...document.querySelectorAll('div')];

divsRef.forEach(item => item.addEventListener('click', clickHandler, {capture: true}));

// document.body.addEventListener('click', clickHandler);

// function clickHandler(event) {
//     event.stopPropagation();
//     console.log(event)

//     console.log(event.target.innerText)
//     console.log(event.target.attributes.style.nodeValue)
//     console.log(event.clientY)
//     event.target.attributes.style.nodeValue = 'background: grey;'
// }
console.log(divsRef);

const par = document.querySelector('div.par')
const allPRef = [...par.querySelectorAll('p')];

allPRef.reverse();
allPRef.forEach(item => console.log(item.innerText));
par.innerHTML = '';
par.append(...allPRef)



// ДЗ 20. div - призрак

paragraph.addEventListener('mouseenter', focusHandler);
paragraph.addEventListener('mouseleave', delFocusHandler);

function focusHandler(event) {
    setTimeout(function() {
        console.log(event)
        const infoDiv = document.createElement('div');
        infoDiv.innerText = 'Info';
        infoDiv.classList.add('infoDiv');
        infoDiv.setAttribute('style', `top: ${event.clientY}px; left: ${event.clientX}px;`)
        document.body.appendChild(infoDiv) 
    }, 200)
    
}

function delFocusHandler() {
    setTimeout(function() {
            document.body.removeChild(document.querySelector('div.infoDiv'))

    }, 200)
}



// ДЗ 21. Таблица

const table = document.createElement('table');
let num = 1;

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
        
    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        td.innerText = `${num}`;
        tr.appendChild(td);

        num++;
        
    }
}

document.body.appendChild(table);



// ДЗ 22. Вывод изображений

const divImg = document.querySelector('div.images');
let images = [];
let randomCheck = [];

for (let i = 0; images.length < 10; i++) {
    let randomNum = Math.floor(Math.random() * (11 - 1)) + 1;
    
    if (!randomCheck.includes(randomNum)) {
        const img = document.createElement('img');
        img.setAttribute('src',`img/${randomNum}.jpg`);
        divImg.appendChild(img);
        images = [...divImg.querySelectorAll('img')];

        randomCheck.push(randomNum);
    }
}
 
console.log(randomCheck);
console.log(images);