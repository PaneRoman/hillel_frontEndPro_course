const app = document.querySelector('#app');

const inputRef = document.createElement('input');
inputRef.setAttribute('name', 'add');

const addRef = document.createElement('button');
addRef.innerText = 'Add';

const clearRef = document.createElement('button');
clearRef.innerText = 'Clear all';

const errMessage = document.createElement('p');
errMessage.classList.add('err-message');
errMessage.setAttribute('id', 'err');

const listRef = document.createElement('ul');




// app.appendChild(inputRef);
// app.appendChild(addRef);
// app.appendChild(clearRef);
// app.appendChild(listRef);

app.append(inputRef, addRef, clearRef, errMessage, listRef);

let idCounter = 0;
let inputValidValue = '';
let editableValidValue = ''
// let valid;
let state = [];

state = JSON.parse(localStorage.getItem('state')) || [];
console.log(state)
renderLi();


inputRef.addEventListener('input', validationInput);
addRef.addEventListener('click', addTodoHandler);
clearRef.addEventListener('click', clearAll);


function validationInput(event) {
    console.log(event);
    if (event.target.name == 'editable') {
        editableValidValue = undefined;
    } else {
        inputValidValue = undefined;
    }

    event.target.parentElement.children.err.innerHTML = '';
    const inputValue = event.target.value;
    // console.log(inputValue);
    const validStr = '!@#$%^&*()_+';

    for (let i = 0; i < inputValue.length; i++) {
        if (validStr.includes(inputValue[i])) {
            let span = document.createElement('span');
            span.innerText = '*Only numbers and letters!';
            event.target.parentElement.children.err.appendChild(span);
            return;
        }
    }

    if (event.target.name == 'editable') {
        editableValidValue = inputValue;
        console.log(editableValidValue);
    } else {
        inputValidValue = inputValue;
        console.log(inputValidValue);
    }
    
}



function clearAll(event) {
    console.log(event)

    event.target.parentElement.children.err.innerHTML = '';
    state = [];
    idCounter = 0;
    // console.log(state);
    localStorage.clear();
    inputRef.value = '';
    inputValidValue = '';
    editableValidValue = '';
    renderLi();
}

function addTodoHandler() {
    if (inputValidValue === undefined) {
        return;
    }

    // if (!valid) {
    //     return;
    // }

    state.push({
        text: inputValidValue,
        // text: valid,
        checked: false,
        editable: false,
        id: idCounter,
    })

    inputRef.value = '';
    inputValidValue = '';
    // editableValidValue = '';
    idCounter++;

    localStorage.setItem('state', JSON.stringify(state));
    renderLi();
      
    // const liRef = document.createElement('li');
    // liRef.setAttribute('data-numb', `${dataNumb}`)

    // const checkBoxRef = document.createElement('input');
    // checkBoxRef.setAttribute('type', 'checkbox');
    
    // const editRef = document.createElement('button');
    // editRef.innerText = 'Edit';
    // editRef.addEventListener('click', editHandler);

    // const removeRef = document.createElement('button');
    // removeRef.innerText = 'Remove';
    // removeRef.addEventListener('click', removeElementHandler);

    // liRef.append(checkBoxRef, value, editRef, removeRef);
    // listRef.appendChild(liRef);
    // inputRef.value = '';
    // dataNumb++;

    // console.log(state)


    // if (numb !== undefined) {
    //     let newLiRef = listRef.querySelector(`[data-numb='${numb}']`);
    //     newLiRef.innerHTML = '';
    //     newLiRef.append(checkBoxRef, value, editRef, removeRef);

    // } else {
    //     liRef.append(checkBoxRef, value, editRef, removeRef);
    //     listRef.appendChild(liRef);
    //     inputRef.value = '';
    //     dataNumb++;
    // }
    
       
}


function removeElementHandler(event) {
    console.log(event);
    console.dir(this);
    
    console.log(this.parentElement.dataset.id)

    state = state.filter((item) => {
        console.log(this.parentElement.dataset.id)
        return item.id != this.parentElement.dataset.id
    })


    localStorage.setItem('state', JSON.stringify(state));
    
    if (state.length == 0) {
        localStorage.clear();
    }

    renderLi();
    // this.parentElement.remove();

    console.log(state)

}


function editHandler(event) {
    console.log(event);
    console.dir(this);
    // let liObj = state.find((item) => {
    //     return item.id == this.parentElement.dataset.id
    // })

    // liObj.editable = true

    state.map((item) => {
        if (item.id == this.parentElement.dataset.id) {
            item.editable = true;
            return item;
        } else {
            item.editable = false;
            return item;
        }
        
    })

    localStorage.setItem('state', JSON.stringify(state));
    renderLi();
    
    // createEditableLi(liObj.text, liObj.id)
    
}

// function changeHandler(event) {
//     console.log(event.target.value);
    
//     let liObj = state.find((item) => {
//         return item.id == event.target.parentElement.dataset.id
//     })

//     liObj.text = event.target.value;

//     console.log(state);

// }

function saveHandler(event) {
    if (editableValidValue === undefined) {
        return;
    }

    console.log(this.parentElement.children[0].value);
    // console.log(this)
    // state.map((item) => {
    //     if (item.id == this.parentElement.dataset.id) {
    //         item.text = this.parentElement.children[0].value;
    //         return item;
    //     }
    //     return item;
    // })

    
    let liObj = state.find((item) => {
        return item.id == this.parentElement.dataset.id
    })

    liObj.text = this.parentElement.children[0].value;
    liObj.editable = false;
    
    // inputValidValue = '';
    editableValidValue = '';

    localStorage.setItem('state', JSON.stringify(state));
    renderLi();
    console.log(state);
}

function cancelHandler() {
    let liObj = state.find((item) => {
        return item.id == this.parentElement.dataset.id
    })

    liObj.editable = !liObj.editable;

    // inputValidValue = '';
    editableValidValue = '';

    localStorage.setItem('state', JSON.stringify(state));
    renderLi();
    console.log(state);
}

function checkboxHandler(event) {
    console.log(event);
    console.dir(this);

    let liObj = state.find((item) => {
        return item.id == this.parentElement.dataset.id
    })

    liObj.checked = !liObj.checked;

    localStorage.setItem('state', JSON.stringify(state));
    console.log(state);
}


function createEditableLi(text, id) {
    // console.log(event)
    // const datasetNumb = event.target.parentElement.dataset.numb;
    // const prevValue = listRef.querySelector(`[data-numb='${datasetNumb}']`);

    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`)

    const editInputRef = document.createElement('input');
    editInputRef.setAttribute('name', 'editable')
    editInputRef.value = text;
    editInputRef.addEventListener('input', validationInput);
    
    const saveRef = document.createElement('button');
    saveRef.innerText = 'Save';
    saveRef.addEventListener('click', saveHandler);

    const cancelRef = document.createElement('button');
    cancelRef.innerText = 'Cancel';
    cancelRef.addEventListener('click', cancelHandler);

    const errMessage = document.createElement('p');
    errMessage.classList.add('err-message');
    errMessage.setAttribute('id', 'err');

    // const editLiRef = listRef.querySelector(`[data-id='${id}']`);
    // editLiRef.innerHTML = '';
    // editLiRef.append(editInputRef, saveRef, cancelRef);

    liRef.append(editInputRef, saveRef, cancelRef, errMessage);
    
    return liRef;
  
}


function createLi(text, id, checked) {

    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`)

    const checkBoxRef = document.createElement('input');
    checkBoxRef.setAttribute('type', 'checkbox');
    if (checked) {
        checkBoxRef.setAttribute('checked', '');
    }
    
    checkBoxRef.addEventListener('click', checkboxHandler);
    
    const editRef = document.createElement('button');
    editRef.innerText = 'Edit';
    editRef.addEventListener('click', editHandler);

    const removeRef = document.createElement('button');
    removeRef.innerText = 'Remove';
    removeRef.addEventListener('click', removeElementHandler);

    liRef.append(checkBoxRef, text, editRef, removeRef);
    
    return liRef;
}


function renderLi() {
    // const liRef = createLi();
    // listRef.appendChild(liRef);
    listRef.innerHTML = '';
    // const liRef;

    state.forEach((item) => {
        if (!item.editable) {
            const liRef = createLi(item.text, item.id, item.checked);
            listRef.append(liRef);
        } else {
            const liRef = createEditableLi(item.text, item.id);
            listRef.append(liRef);
        }
        // const liRef = createLi(item.text, item.id);
        

    })

    console.log(state)
}

