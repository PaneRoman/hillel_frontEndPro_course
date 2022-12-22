// Add Fetch Request

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

app.append(inputRef, addRef, clearRef, errMessage, listRef);


let idCounter = 0;
let inputValidValue = '';
let editableValidValue = '';
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
    // console.log(inputValidValue);
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
        // console.log(editableValidValue);
    } else {
        inputValidValue = inputValue;
        // console.log(inputValidValue);
    }
}


function clearAll(event) {
    // console.log(event)
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

    // state.push({
    //     title: inputValidValue,
    //     completed: false,
    //     editable: false,
    //     id: idCounter,
    // });

    createToDo(inputValidValue);

    inputRef.value = '';
    inputValidValue = '';
    editableValidValue = '';
    idCounter++;

    // localStorage.setItem('state', JSON.stringify(state));
    // renderLi();
}


function removeElementHandler(event) {
    // console.log(event);
    // console.dir(this);
    // console.log(this.parentElement.dataset.id)

    const liDataId = this.parentElement.dataset.id;

    state = state.filter((item) => {
        return item.id != liDataId;
    })

    deleteData(liDataId);
    localStorage.setItem('state', JSON.stringify(state));
    
    if (state.length == 0) {
        localStorage.clear();
    }

    renderLi();
    // this.parentElement.remove();
    console.log(state)
}


function editHandler(event) {
    // console.log(event);
    // console.dir(this);
    
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
}


function saveHandler(event) {
    if (editableValidValue === undefined) {
        return;
    }

    // console.log(this.parentElement.children[0].value);
    // console.log(this)

    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find((item) => {
        return item.id == liDataId;
    })

    liObj.title = this.parentElement.children[0].value;
    liObj.editable = false;
    updateData(liObj);
    
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
    // console.log(event);
    // console.dir(this);

    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find((item) => {
        return item.id == liDataId;
    })

    liObj.completed = !liObj.completed;
    updateData(liObj);

    localStorage.setItem('state', JSON.stringify(state));
    console.log(state);
}


function createEditableLi(title, id) {
    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`)

    const editInputRef = document.createElement('input');
    editInputRef.setAttribute('name', 'editable')
    editInputRef.value = title;
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

    liRef.append(editInputRef, saveRef, cancelRef, errMessage);
    
    return liRef;
}


function createLi(title, id, completed) {

    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`)

    const checkBoxRef = document.createElement('input');
    checkBoxRef.setAttribute('type', 'checkbox');
    if (completed) {
        checkBoxRef.setAttribute('checked', '');
    }
    
    checkBoxRef.addEventListener('click', checkboxHandler);
    
    const editRef = document.createElement('button');
    editRef.innerText = 'Edit';
    editRef.addEventListener('click', editHandler);

    const removeRef = document.createElement('button');
    removeRef.innerText = 'Remove';
    removeRef.addEventListener('click', removeElementHandler);

    liRef.append(checkBoxRef, title, editRef, removeRef);
    
    return liRef;
}


function renderLi() {
    listRef.innerHTML = '';
   
    state.forEach((item) => {
        if (!item.editable) {
            const liRef = createLi(item.title, item.id, item.completed);
            listRef.append(liRef);
        } else {
            const liRef = createEditableLi(item.title, item.id);
            listRef.append(liRef);
        }
        
    })

    console.log(state)
}

function getInitialData() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((data) => {
        state = data.map((item) => {
            return {...item, editable: false}
        })
        localStorage.setItem('state', JSON.stringify(state));
        renderLi();
    })
}

getInitialData();

function updateData(obj) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            ...obj
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((updated) => console.log('updated>>>', updated))
}

function deleteData(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((deleted) => console.log('deleted>>>', deleted))
}

function createToDo(value) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: value,
            completed: false,
            editable: false,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            data.id += idCounter;
            state.push(data);
            localStorage.setItem('state', JSON.stringify(state));
            renderLi();
        })
}
