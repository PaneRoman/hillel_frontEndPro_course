const form = document.getElementById('form1');
const formFields = form.elements;
console.log(formFields)

const submitBtn = form.querySelector('[type="submit"]');

submitBtn.addEventListener('click', clearStorage);


function clearStorage() {
    localStorage.clear();
}

function changeHandler() {
    console.log(this);
    if (this.type !== 'checkbox') {
        console.log(this.name, this.value);
        localStorage.setItem(this.name, this.value);
    } else {
        console.log(this.name, this.checked);
        localStorage.setItem(this.name, this.checked);
    }
}

function checkStorage() {
    for (let i = 0; i < formFields.length; i++) {
       if (formFields[i].type !== 'submit') {
        if (formFields[i].type === 'checkbox') {
            formFields[i].checked = localStorage.getItem(formFields[i].name)
        } else {
            formFields[i].value = localStorage.getItem(formFields[i].name)
        }
       } 
        
    }

    attachEvents();
}

function attachEvents() {
    for (let i = 0; i < formFields.length; i++) {
        formFields[i].addEventListener('change', changeHandler);
        
    }
}

checkStorage();


window.addEventListener('storage', () => {
    console.log('storage has changed');
})