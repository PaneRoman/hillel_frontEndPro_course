// Збирання сміття

// Взаємозв’язані об’єкти
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry({name: 'Ivan'}, {name: 'Anna'});
console.log(family);

// Тепер видалимо два посилання:
delete family.father;
delete family.mother.husband;

console.log(family);

// Недосяжний “острів”
family = null;
console.log(family);

