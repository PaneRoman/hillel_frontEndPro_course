// ДЗ 20. div - призрак

const paragraph = document.querySelector('.paragraph')

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