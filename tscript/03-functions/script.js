function sum(x, y) {
    return x + y;
}
console.log(sum(2, 34));
var anotherSum = function (x, y) {
    return x + y;
};
console.log(anotherSum(34, 23));
var func = function (x, y) {
    return x + y;
};
console.log(func(34, 33));
// default parameter
var funcWithDefaultParam = function (x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
};
console.log(funcWithDefaultParam(24));
console.log(funcWithDefaultParam(24, 1));
// optional
var funcWithOptional = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(funcWithOptional(24));
console.log(funcWithOptional(24, 1));
// rest parameter
function davet(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davet('gafur'));
console.log(davet('gafur', 'ali', 'veli'));
function anotherDavet() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(anotherDavet('gafur'));
console.log(anotherDavet('gafur', 'ali', 'veli'));
