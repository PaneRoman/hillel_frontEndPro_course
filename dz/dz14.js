class House {
    constructor(floors, wallType, age, location) {
        this.floors = floors;
        // this.apartQuantity = apartQuantity;
        this.wallType = wallType;
        this.age = age + ' year';
        this.location = location;
    }

    createFlats(quantity) {
            this.flatsQuantity = quantity;
            return this;
    }

}

let house = new House(9, 'brick', 10, 'middletown').createFlats(36);
console.log(house);


class Tenant {
    constructor(fullName, howOld, sex) {
        this.fullName = fullName;
        this.howOld = howOld;
        this.sex = sex;
        // this.flatNumber = '#' + flatNumber;
    }
}


class Flat {
    constructor(rooms, flatType, square, repair, bathrooms, balcony, stat) {
        this.rooms = rooms;
        this.flatType = flatType;
        this.square = square + 'm*2';
        this.repair = repair;
        this.bathrooms = bathrooms;
        this.balcony = balcony;
        this.stat = stat;
        this.tenants = 0;
    }

    createTenant(fullName, howOld, flatNumber) {
        this.tenants++;
        this[`tenant ${fullName.split(' ')[0]}`] = new Tenant(fullName, howOld, flatNumber)
        return this
    }
}

let flat = new Flat(45, 'studio', 50, 'yes', 1, 'none', 'free')
    .createTenant('Roman Petrov', 41, 'male')
    .createTenant('Evgeniya Petrova', 25, 'female')
    .createTenant('EvgeniyaJR Petrova', 12, 'femael');

console.log(flat);

// class Tenant {
//     constructor(fullName, howOld, flatNumber) {
//         this.fullName = fullName;
//         this.howOld = howOld;
//         this.flatNumber = '#' + flatNumber;
//     }
// }

// let tenant = new Tenant('Roman Petrov', 41, 191);
// console.log(tenant);
