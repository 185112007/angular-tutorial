class Person{

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    save(){
        console.log("saved " + this.name);
    }
}

const person = new Person('gafur', 'hayytbayev');

person.save();
console.log(person.name + " " + person.surname);