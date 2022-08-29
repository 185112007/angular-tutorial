var number = 10;
var city = 'istanbul';

console.log(number);
console.log(city);

var city = 'adana';

console.log(city);

function printMessage(){
    var name = 'gafur';
    console.log(name);
    console.log(city);
}

printMessage();
console.log(name);

// const usage
const surname = 'hayytbayev';

// you cannot change
//surname = 'dqdqdq';
console.log(surname);

// reference type
const cities = ['istanbul', 'adana'];
cities.push('ankara');

//cannot change
//cities = ['konya', 'manisa'];
console.log(cities);