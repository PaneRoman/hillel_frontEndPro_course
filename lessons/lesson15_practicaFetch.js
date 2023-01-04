// Add Fetch Request

const app = document.querySelector('#app');
const addWrap = document.querySelector('.add-wrap');


const inputRef = document.createElement('input');
inputRef.setAttribute('name', 'add');

const addRef = document.createElement('button');
addRef.innerText = 'Add';

const clearRef = document.createElement('button');
clearRef.innerText = 'Clear all';

const errMessage = document.createElement('p');
errMessage.classList.add('err-message');
errMessage.setAttribute('id', 'err');

// Add Search input field
const searchRef = document.createElement('input');
searchRef.setAttribute('type', 'search');
searchRef.setAttribute('placeholder', 'search...');

// Add Sort selection
const sortSelect = document.createElement('select');
sortSelect.setAttribute('name', 'sort');
sortSelect.setAttribute('id', 'sort');

const selectOption1 = document.createElement('option');
selectOption1.innerText = 'From Max Id to';
selectOption1.setAttribute('value', 'maxTo');

const selectOption2 = document.createElement('option');
selectOption2.innerText = 'From Min Id to';
selectOption2.setAttribute('value', 'minTo');
selectOption2.setAttribute('selected', '');

// Add Search message
const searchMessage = document.createElement('p');
searchMessage.innerText = 'Can not search nothing!';

const listRef = document.createElement('ul');


sortSelect.append(selectOption1, selectOption2)
addWrap.append(inputRef, addRef, clearRef, errMessage)
app.append(addWrap, searchRef, sortSelect, listRef);


let idCounter = 0;
let inputValidValue = '';
let editableValidValue = '';
let state = [];
let filteredState = [];

// let testArr = [32, 8, 1, 15, 58]

state = JSON.parse(localStorage.getItem('state')) || [];
console.log(state)
renderLi();


inputRef.addEventListener('input', validationInput);
addRef.addEventListener('click', addTodoHandler);
clearRef.addEventListener('click', clearAll);
searchRef.addEventListener('input', searchText);
sortSelect.addEventListener('input', sortToDoList)


function sortToDoList(event) {
    console.log('sortEvent', event);
    if (event.target.value == 'maxTo' && !filteredState.length) {
        state.sort(invertSort);
        renderLi();
        console.log('sortState', state);
    }
    if (event.target.value == 'maxTo' && filteredState.length) {
        filteredState.sort(invertSort);
        renderLi(filteredState);
        console.log('sortState', filteredState);
    }

    if (event.target.value == 'minTo' && !filteredState.length) {
        state.sort(nonInvertSort);
        renderLi();
        console.log('sortState', state);
    }
    if (event.target.value == 'minTo' && filteredState.length) {
        filteredState.sort(nonInvertSort);
        renderLi(filteredState);
        console.log('sortState', filteredState);
    }
  
}

function nonInvertSort(a, b) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    if (a.id == b.id) return 0;
}

function invertSort(a, b) {
    if (a.id < b.id) return 1;
    if (a.id > b.id) return -1;
    if (a.id == b.id) return 0;
}

// function searchText(event) {
//     setTimeout(() => {
//     console.log('searchValue>>', event.target.value);
//         const searched = event.target.value;
//         const filteredState = state.filter((item) => {
//             return item.title.includes(searched);    
//         })
//         console.log('filteredState', filteredState);
//         renderLi(filteredState);
//     }, 1000)
    
// }

async function searchText (event) {
    console.log(event)
    console.dir(addWrap.children)

    searchRef.removeEventListener('input', searchText);
    const addElem = [...addWrap.children];
    addElem.forEach((item) => item.setAttribute('disabled', ''))

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })

    console.log('searchValue>>', searchRef.value);

    const searched = searchRef.value;
    filteredState = state.filter((item) => {
        if (item.title.includes(searched) && searched != '') {
            return true;
        }
            
    })
    console.log('filteredState', filteredState);
   
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
    
    // searchRef.addEventListener('input', searchText);
}


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


// function addTodoHandler() {
//     if (inputValidValue === undefined) {
//         return;
//     }

//     // state.push({
//     //     title: inputValidValue,
//     //     completed: false,
//     //     editable: false,
//     //     id: idCounter,
//     // });

//     // createToDo(inputValidValue); // Perviu variant

//     const response = createToDo(inputValidValue); // Vtorou variant
//     console.log('response', response);
//     response
//         .then((data) => {
//             data.id += idCounter;
//             state.push(data)
//         })
//         .then(() => {
//             renderLi();
//             localStorage.setItem('state', JSON.stringify(state));
//         });

//     inputRef.value = '';
//     inputValidValue = '';
//     editableValidValue = '';
//     idCounter++;

//     // localStorage.setItem('state', JSON.stringify(state));
//     // renderLi();
// }


async function addTodoHandler() {  //Asynchronniu variant funkcii addTodoHandler()
    if (inputValidValue === undefined) {
        return;
    }

    const response = await createToDo(inputValidValue); // createToDo() vozvrawaet Promise
    console.log('response>>>', response); // Blagodarja await polu4aem srazu dannie
    response.id += idCounter;
    state.push(response)

    localStorage.setItem('state', JSON.stringify(state));
    renderLi();

    inputRef.value = '';
    inputValidValue = '';
    editableValidValue = '';
    idCounter++;

}


function removeElementHandler(event) {
    // console.log(event);
    // console.dir(this);
    // console.log(this.parentElement.dataset.id)

    const liDataId = this.parentElement.dataset.id;

    console.log('nonUpdatedState>>', state);
    const response = deleteData(liDataId);
    response
        .then((deleted) => console.log('deleted>>>', deleted))
        .then(() => {

            if (filteredState.length) {
                state = state.filter((item) => item.id != liDataId);

                filteredState = filteredState.filter((item) => item.id != liDataId);

                console.log('updatedState2>>>', state);
                localStorage.setItem('state', JSON.stringify(state));
                if (state.length == 0) localStorage.clear();

                if (!filteredState.length) {
                    renderLi();
                    return;
                }

                renderLi(filteredState);

            } else {
                state = state.filter((item) => item.id != liDataId);

                console.log('updatedState2>>>', state);
                localStorage.setItem('state', JSON.stringify(state));
                if (state.length == 0) localStorage.clear();

                renderLi();
            }

            // state = state.filter((item) => {
            //     return item.id != liDataId;
            // })
            
            // console.log('updatedState2>>>', state);
            // localStorage.setItem('state', JSON.stringify(state));
            // if (state.length == 0) localStorage.clear();
            
            // renderLi();
        })
        .catch(err => console.warn('delERROR>>>', err))

    // localStorage.setItem('state', JSON.stringify(state));
    
    // if (state.length == 0) {
    //     localStorage.clear();
    // }

    // renderLi();
    // this.parentElement.remove();
    // console.log(state)
}


function editHandler(event) {
    // console.log(event);
    // console.dir(this);
    const liDataId = this.parentElement.dataset.id;

    state.forEach((item) => {
        // if (item.id == this.parentElement.dataset.id) {
        //     item.editable = true;
        //     // return item;
        // } else {
        //     item.editable = false;
        //     // return item;
        // }
        
        (item.id == liDataId) ? item.editable = true : item.editable = false
        
    })

    localStorage.setItem('state', JSON.stringify(state));

    (filteredState.length) ? renderLi(filteredState) : renderLi();

    // renderLi();
}


function saveHandler(event) {
    if (editableValidValue === undefined) {
        return;
    }

    // console.log(this.parentElement.children[0].value);
    console.dir(this.parentElement.children)
    console.log(event)

    // const liChildren = this.parentElement.children;
    const liChildren = [...this.parentElement.children];
    console.dir(liChildren)

    liChildren.forEach((item) => item.setAttribute('disabled', ''))

    // for (let i = 0; i < children.length; i++) {
    //     children[i].setAttribute('disabled', '')
    //     console.log(children[i])
        
    // }

    // event.target.setAttribute('disabled', '');
    // event.target.nextElementSibling.setAttribute('disabled', '');
    // event.target.previousElementSibling.setAttribute('disabled', '');

    const currentInputValue = this.parentElement.children[0].value;
    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find((item) => {
        return item.id == liDataId;
    })

    // liObj.title = currentInputValue;
    // liObj.editable = false;
    console.log('nonUpdatedState>>', state);
    // const response = updateData(liObj, 'title', currentInputValue); // ver.2
    const response = updateData(liObj.id, {...liObj, title: currentInputValue});
    response
        .then((data) => {
            console.log('updated2>>>', data)
            liObj.title = data.title;
            liObj.editable = false;
            console.log('updatedState2>>>', state);
        })
        .then(() => {
            localStorage.setItem('state', JSON.stringify(state));
            (filteredState.length) ? renderLi(filteredState) : renderLi();
            // renderLi();
            editableValidValue = '';
        })
        .catch(err => console.warn('updateERROR>>>', err))
    
    // editableValidValue = '';

}


function cancelHandler() {
    let liObj = state.find((item) => {
        return item.id == this.parentElement.dataset.id
    })

    liObj.editable = !liObj.editable;

    // inputValidValue = '';
    editableValidValue = '';

    localStorage.setItem('state', JSON.stringify(state));
    (filteredState.length) ? renderLi(filteredState) : renderLi();
    // renderLi();
    console.log(state);
}


function checkboxHandler(event) { //Common Function variant checkboxHandler() + then()
    console.log(event);
    console.dir(this.parentElement.children);

    event.preventDefault();
    const liChildren = [...this.parentElement.children];
    liChildren.forEach((item) => item.setAttribute('disabled', ''));

    // event.target.setAttribute('disabled', '');
    // event.target.nextElementSibling.setAttribute('disabled', '');
    // event.target.nextElementSibling.nextElementSibling.setAttribute('disabled', '');
    // event.target.removeEventListener('click', checkboxHandler);
    const liDataId = this.parentElement.dataset.id;

    const liObj = state.find((item) => {
        return item.id == liDataId;
    })

    // liObj.completed = !liObj.completed;
    console.log('nonUpdatedState>>', state);

    // const response = updateData(liObj, 'complited', liObj.completed); // ver.2
    const response = updateData(liObj.id, {...liObj, completed: !liObj.completed});
    response
        // .then((updated) => console.log('updated>>>', updated))
        .then((data) => {
            console.log('updated>>>', data)
            liObj.completed = data.completed;
            console.log('updatedState>>>', state);
            localStorage.setItem('state', JSON.stringify(state));
            (filteredState.length) ? renderLi(filteredState) : renderLi();
            // renderLi();
        })
        .catch(err => console.warn('updateERROR>>>', err))
}

// async function checkboxHandler(event) { //Async Function variant checkboxHandler()
//     // console.log(event);
//     // console.dir(this);

//     try {
//        const liDataId = this.parentElement.dataset.id;

//         const liObj = state.find((item) => {
//             return item.id == liDataId;
//         })

//         // liObj.completed = !liObj.completed;
//         console.log('nonUpdatedState>>', state);
//         const response = await updateData(liObj, 'complited', liObj.completed);
    
//         console.log('updated>>>', response);
//         liObj.completed = response.completed;
//         console.log('updatedState>>>', state);
//         localStorage.setItem('state', JSON.stringify(state)); 
//     } catch (err) {
//         console.warn('updateERROR>>>', err)
//     }
     
// }

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
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((data) => {
        state = data.map((item) => {
            return {...item, editable: false, filtered: false}
        })
        localStorage.setItem('state', JSON.stringify(state));
        renderLi();
    })
    .catch(err => console.warn('initERROR>>>', err))
}

getInitialData();

function updateData(id, obj) { //obj - ver.1; (obj, propName, value) - ver.2  (id, obj) - ver.3 final
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            // ...obj,     //ver.1
            // completed: !obj.completed    //ver.1
            // completed: (propName == 'complited' && typeof value == 'boolean') ? !obj.completed : obj.completed,  //ver.2
            // title: (propName == 'title' && typeof value == 'string') ? value : obj.title   //ver.2

            //ver.3
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
        // .then(async response => { //ispol'zyja AsyncFn i Await mogno obrabotat' Response metodom json(), ne vozvrawaja obratno v Promise
        //     const json = await response.json();
        //     console.log('json', json);
        // })
        .then((response) => response.json())
        // .then((updated) => console.log('updated>>>', updated))
        // .catch(err => console.warn('updateERROR>>>', err))
}

function deleteData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        // .then((deleted) => console.log('deleted>>>', deleted))
}

// Perviu variant
// function createToDo(value) {
//     fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: value,
//             completed: false,
//             editable: false,
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             data.id += idCounter;
//             state.push(data);
//             localStorage.setItem('state', JSON.stringify(state));
//             renderLi();
//         })
// }

// Vtorou variant createToDO. 4erez return. Vozvrawaet Promise
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
        .then((response) => response.json())
}
