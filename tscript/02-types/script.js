// number
var sayi;
sayi = 10;
var another = 234;
// string
var city;
city = 'adana';
var anotherString = 'istanbul';
// boolean
var dogrumu;
dogrumu = false;
var anotherBoolean = true;
// arrays
var numbers = [1, 2, 3, 4];
var anotherArray;
anotherArray = ['adana', 'ankara'];
// generic type
var arr = [1, 2, 3];
// tuple
var dizi = [2, 'adana'];
// enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var color = Color.BLUE;
console.log(color);
// any
var unknown = 'ankara';
unknown = 2.3;
unknown = {};
unknown = [];
// void
function printHello() {
    console.log("Hello, world!");
}
printHello();
// undefined
var age;
console.log(age); // undefined
// null
var customer;
console.log(customer[0]);
