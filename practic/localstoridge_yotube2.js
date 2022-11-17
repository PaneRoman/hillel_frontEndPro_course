const addItemsForm = document.querySelector('.add-items-form');
const itemsList = document.querySelector('.items-list');
let items = [];
items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

addItemsForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleClick);
displayItems(items, itemsList);

function addItem(event) {
    event.preventDefault();
    // console.log(event);
    const text = event.target.item.value;
    const item = {
        text: text,
        checked: false,
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList);
    this.reset();
    
    // console.log(items);
   
}

function displayItems(ingredients, ingredientsList) {
    console.log(ingredients, ingredientsList);

    // const item = document.createElement('li');
    // item.innerText = `${ingredients[ingredients.length - 1].text}`;
    // ingredientsList.appendChild(item);
  
    ingredientsList.innerHTML = ingredients.map((ingredient, index) => {
        return `<li>
        <input type='checkbox' id='item${index}' data-index='${index}' ${ingredient.checked ? 'checked' : ''} />
        <label for='item${index}'>${ingredient.text}</label>
        </li>`;
    }).join('');

}

function toggleClick(event) {
    if (!event.target.matches('input')) {
        return
    }
    const indexElement = event.target.dataset.index;
    items[indexElement].checked = !items[indexElement].checked;
    localStorage.setItem('items', JSON.stringify(items))
    displayItems(items, itemsList)

    console.log(event);
   
    
}