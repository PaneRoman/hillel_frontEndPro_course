// Add Fetch Request from jsonholder server


const app = document.querySelector('#app');
const addWrap = document.querySelector('.add-wrap');

// Create Input Field
const inputRef = document.createElement('input');
inputRef.setAttribute('name', 'add');

// Create Add Button
const addRef = document.createElement('button');
addRef.innerText = 'Add';

// Create Clear Button
const clearRef = document.createElement('button');
clearRef.innerText = 'Clear all';

// Create Error Message Paragraph
const errMessage = document.createElement('p');
errMessage.classList.add('err-message');
errMessage.setAttribute('id', 'err');

// Create Search input field
const searchRef = document.createElement('input');
searchRef.setAttribute('type', 'search');
searchRef.setAttribute('placeholder', 'search...');

// Create Sort selection
const sortSelect = document.createElement('select');
sortSelect.setAttribute('name', 'sort');
sortSelect.setAttribute('id', 'sort');

const selectOption1 = document.createElement('option');
selectOption1.innerText = 'From Min Id to';
selectOption1.setAttribute('value', 'minTo');

const selectOption2 = document.createElement('option');
selectOption2.innerText = 'From Max Id to';
selectOption2.setAttribute('value', 'maxTo');

// Create Search Message Paragraph
const searchMessage = document.createElement('p');
searchMessage.innerText = 'Can not search nothing!';

// Create ul
const listRef = document.createElement('ul');


sortSelect.append(selectOption1, selectOption2)
addWrap.append(inputRef, addRef, clearRef, errMessage)
app.append(addWrap, searchRef, sortSelect, listRef);


let idCounter = 0;
let inputValidValue = '';
let editableValidValue = '';
let state = [];
let filteredState = [];


state = JSON.parse(localStorage.getItem('state')) || [];
renderLi();

renderApp();

inputRef.addEventListener('input', validationInput);
addRef.addEventListener('click', addTodoHandler);
clearRef.addEventListener('click', clearAll);
searchRef.addEventListener('input', searchText);
sortSelect.addEventListener('input', sortToDoList);


async function renderApp() {
    try {
        state = await getInitialData();
        console.log('stateRender>>>', state);
        localStorage.setItem('state', JSON.stringify(state));
        renderLi();

    } catch (err) {
        console.warn('getInitDataERROR>>>', err);
        const errWarning = createErrModalWindow(err);
        app.append(errWarning);
    }
    
}


async function showTodoInfo(event) {
    // Get Data From Server
    const data = await getInitialData();
    // console.log('showServerData>>>', data);

    // Find liObject
    const liDataId = event.target.parentElement.dataset.id;
    const liObj = data.find((item) => item.id == liDataId);
    
    // Create Info Modal Window
    const windowType = 'info';
    const infoModalWindow = createModalWindow(windowType);

    // Create Info Paragraphs
    for (const key in liObj) {
        const paragraph = document.createElement('p');
        paragraph.innerText = `${key}: ${liObj[key]}`
        infoModalWindow.append(paragraph);
    }

    app.append(infoModalWindow);
}


function createModalWindow(type) {
    const prevModalWindow = app.querySelector('.modal-window');

    if (prevModalWindow) {
        prevModalWindow.remove();
    }

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window', type);

    const closeCross = document.createElement('div');
    closeCross.classList.add('close');

    closeCross.addEventListener('click', () => {
        app.querySelector('.modal-window').remove();
    });

    modalWindow.append(closeCross);

    return modalWindow;
}

function createErrModalWindow(errMessage) {
    const windowType = 'error';
    const errorModalWindow = createModalWindow(windowType);

    // Create Error Paragraphs
    const headerPar = document.createElement('p');
    headerPar.innerText = 'Oooooops!';
    const messagePar = document.createElement('p');
    messagePar.innerText = errMessage;

    errorModalWindow.append(headerPar, messagePar);

    return errorModalWindow;
}


function sortToDoList(event) {
    console.log('sortEvent', event);
    if (event.target.value == 'maxTo' && !filteredState.length) {
        state.sort((a, b) => b.id - a.id); // Invert Sort
        renderLi();
        console.log('sortState', state);
    }
    if (event.target.value == 'maxTo' && filteredState.length) {
        filteredState.sort((a, b) => b.id - a.id);  // Invert Sort
        renderLi(filteredState);
        console.log('sortState', filteredState);
    }

    if (event.target.value == 'minTo' && !filteredState.length) {
        state.sort((a, b) => a.id - b.id); // nonInvert Sort
        renderLi();
        console.log('sortState', state);
    }
    if (event.target.value == 'minTo' && filteredState.length) {
        filteredState.sort((a, b) => a.id - b.id); // nonInvert Sort
        renderLi(filteredState);
        console.log('sortState', filteredState);
    }
  
}


async function searchText (event) {
    searchRef.removeEventListener('input', searchText);
    const addElem = [...addWrap.children];
    addElem.forEach((item) => item.setAttribute('disabled', ''))

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })

    // console.log('searchValue>>', searchRef.value);

    const searched = searchRef.value;
    filteredState = state.filter((item) => {
        if (item.title.includes(searched) && searched != '') {
            return true;
        }
            
    })
    // console.log('filteredState', filteredState);
   
    if (filteredState.length) {
        renderLi(filteredState);
        searchRef.addEventListener('input', searchText);
        return;
    }

    if (!filteredState.length && searched == '') {
        renderLi();
        searchRef.addEventListener('input', searchText);
        addElem.forEach((item) => item.removeAttribute('disabled'))
        return;
    }

    if (searched) {
        listRef.innerHTML = '';
        listRef.append(searchMessage);
        searchRef.addEventListener('input', searchText);
        return;
    }
   
}


function validationInput(event) {
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
    } else {
        inputValidValue = inputValue;
    }
}


function clearAll(event) {
    event.target.parentElement.children.err.innerHTML = '';
    state = [];
    idCounter = 0;
    localStorage.clear();
    inputRef.value = '';
    inputValidValue = '';
    editableValidValue = '';
    renderLi();
}


async function addTodoHandler() {  //Asynchronniu variant funkcii addTodoHandler()
    try {
        if (inputValidValue === undefined) {
            return;
        }
    
        const response = await createToDo(inputValidValue);
        console.log('response>>>', response);
        response.id += idCounter;
        state.push(response)
    
        localStorage.setItem('state', JSON.stringify(state));
        renderLi();
    
        inputRef.value = '';
        inputValidValue = '';
        editableValidValue = '';
        idCounter++; 

    } catch (err) {
        console.warn('createDataERROR>>>', err);
        const errWarning = createErrModalWindow(err);
        app.append(errWarning);
    }
}


function removeElementHandler(event) {
    const liChildren = [...this.parentElement.children];
    liChildren.forEach((item) => item.setAttribute('disabled', ''));

    const liDataId = this.parentElement.dataset.id;

    // console.log('nonUpdatedState>>', state);
    const response = deleteData(liDataId);
    response
        .then((deleted) => console.log('deleted>>>', deleted))
        .then(() => {

            if (filteredState.length) {
                state = state.filter((item) => item.id != liDataId);

                filteredState = filteredState.filter((item) => item.id != liDataId);

                // console.log('updatedState2>>>', state);
                localStorage.setItem('state', JSON.stringify(state));
                if (state.length == 0) localStorage.clear();

                if (!filteredState.length) {
                    renderLi();
                    return;
                }

                renderLi(filteredState);

            } else {
                state = state.filter((item) => item.id != liDataId);

                // console.log('updatedState2>>>', state);
                localStorage.setItem('state', JSON.stringify(state));
                if (state.length == 0) localStorage.clear();

                renderLi();
            }

        })
        .catch(err => {
            console.warn('delERROR>>>', err);
            const errWarning = createErrModalWindow(err);
            app.append(errWarning);

            liChildren.forEach((item) => item.removeAttribute('disabled', ''));
        })

}


function editHandler(event) {
    const liDataId = this.parentElement.dataset.id;

    state.forEach(item => (item.id == liDataId) ? item.editable = true : item.editable = false)

    localStorage.setItem('state', JSON.stringify(state));

    (filteredState.length) ? renderLi(filteredState) : renderLi();

}


function saveHandler(event) {
    if (editableValidValue === undefined) {
        return;
    }

    const liChildren = [...this.parentElement.children];
   
    liChildren.forEach(item => item.setAttribute('disabled', ''));

    const currentInputValue = this.parentElement.children[0].value;
    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find(item => item.id == liDataId);

    // console.log('nonUpdatedState>>', state);

    const response = updateData(liObj.id, {...liObj, title: currentInputValue});
    response
        .then((data) => {
            // console.log('updated2>>>', data)
            liObj.title = data.title;
            liObj.editable = false;
            // console.log('updatedState2>>>', state);
        })
        .then(() => {
            localStorage.setItem('state', JSON.stringify(state));
            (filteredState.length) ? renderLi(filteredState) : renderLi();
            editableValidValue = '';
        })
        .catch(err => {
            console.warn('updateERROR>>>', err);
            const errWarning = createErrModalWindow(err);
            app.append(errWarning);

            liChildren.forEach((item) => item.removeAttribute('disabled', ''));
        })
 
}


function cancelHandler() {
    let liObj = state.find(item => item.id == this.parentElement.dataset.id);

    liObj.editable = !liObj.editable;

    editableValidValue = '';

    localStorage.setItem('state', JSON.stringify(state));
    (filteredState.length) ? renderLi(filteredState) : renderLi();
    
    // console.log(state);
}


function checkboxHandler(event) { //Common Function variant checkboxHandler() + then()
    event.preventDefault();
    const liChildren = [...this.parentElement.children];
    liChildren.forEach((item) => item.setAttribute('disabled', ''));

    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find(item => item.id == liDataId);

    // console.log('nonUpdatedState>>', state);

    const response = updateData(liObj.id, {...liObj, completed: !liObj.completed});
    response
        .then((data) => {
            // console.log('updated>>>', data)
            liObj.completed = data.completed;
            // console.log('updatedState>>>', state);
            localStorage.setItem('state', JSON.stringify(state));
            (filteredState.length) ? renderLi(filteredState) : renderLi();
        })
        .catch(err => {
            console.warn('updateERROR>>>', err);
            const errWarning = createErrModalWindow(err);
            app.append(errWarning);

            liChildren.forEach((item) => item.removeAttribute('disabled', ''));
        })
}


function createEditableLi(title, id) {
    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`)

    // Create Editable Input
    const editInputRef = document.createElement('input');
    editInputRef.setAttribute('name', 'editable')
    editInputRef.value = title;
    
    // Create Save Button
    const saveRef = document.createElement('button');
    saveRef.innerText = 'Save';
    
    // Create Cancel Button
    const cancelRef = document.createElement('button');
    cancelRef.innerText = 'Cancel';
    
    // Create Error Message Paragraph
    const errMessage = document.createElement('p');
    errMessage.classList.add('err-message');
    errMessage.setAttribute('id', 'err');


    editInputRef.addEventListener('input', validationInput);
    saveRef.addEventListener('click', saveHandler);
    cancelRef.addEventListener('click', cancelHandler);

    liRef.append(editInputRef, saveRef, cancelRef, errMessage);
    
    return liRef;
}


function createLi(title, id, completed) {

    // Create Li
    const liRef = document.createElement('li');
    liRef.setAttribute('data-id', `${id}`);

    // Create Checkbox
    const checkBoxRef = document.createElement('input');
    checkBoxRef.setAttribute('type', 'checkbox');

    if (completed) checkBoxRef.setAttribute('checked', '');

    // Create Span
    const spanRef = document.createElement('span');
    spanRef.innerText = title;
    
    // Create Edit Button
    const editRef = document.createElement('button');
    editRef.innerText = 'Edit';

    // Create Remove Button
    const removeRef = document.createElement('button');
    removeRef.innerText = 'Remove';


    spanRef.addEventListener('click', showTodoInfo);
    checkBoxRef.addEventListener('click', checkboxHandler);
    editRef.addEventListener('click', editHandler);
    removeRef.addEventListener('click', removeElementHandler);

    liRef.append(checkBoxRef, spanRef, editRef, removeRef);
    
    return liRef;
}


function renderLi(renderState = state) {
    listRef.innerHTML = '';
   
    renderState.forEach((item) => {
        if (!item.editable) {
            const liRef = createLi(item.title, item.id, item.completed);
            listRef.append(liRef);
        } else {
            const liRef = createEditableLi(item.title, item.id);
            listRef.append(liRef);
        }
        
    })

    console.log('renderState', renderState);
}

function getInitialData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((response) => {
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error(`Not 2xx response! ResponseStatus is ${response.status}`);
            } else {
                // got the desired response
            return response;
            }
        })
        .then((response) => response.json())
        .then((data) => {
            return data.map((item) => {
                return {...item, editable: false, filtered: false}
            })
        })    
}

// getInitialData();

function updateData(id, obj) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: obj.title,
            completed: obj.completed,
            editable: obj.editable,
            filtered: obj.filtered,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error(`Not 2xx response! ResponseStatus is ${response.status}`);
            } else {
                // got the desired response
                return response;
            }
        })
        .then((response) => response.json())
        
}

function deleteData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error(`Not 2xx response! ResponseStatus is ${response.status}`);
            } else {
                // got the desired response
                return response;
            }
        })
            .then((response) => response.json())
}

function createToDo(value) {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: value,
            completed: false,
            editable: false,
            filtered: false,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error(`Not 2xx response! ResponseStatus is ${response.status}`);
            } else {
                // got the desired response
                return response;
            }
    })
        .then((response) => response.json())
}
