function sum(x: number,y: number): number{
    return x+y;
}

console.log(sum(2,34));

let anotherSum = function(x: number, y: number): number{
    return x + y;
};

console.log(anotherSum(34,23));

let func = (x: number, y: number): number => {
    return x + y;
};

console.log(func(34,33));

// default parameter
let funcWithDefaultParam = function (x: number, y: number = 0): number{
    return x + y;
}
console.log(funcWithDefaultParam(24));
console.log(funcWithDefaultParam(24, 1));

// optional
let funcWithOptional = function (x: number, y?: number): number{
    if (y){
        return x + y;
    }
    return x;
}
console.log(funcWithOptional(24));
console.log(funcWithOptional(24, 1));

// rest parameter
function davet(ilkDavetli:string,...digerleri:string[]): string{
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davet('gafur'));
console.log(davet('gafur', 'ali', 'veli'));

function anotherDavet(...digerleri:string[]): string{
    return digerleri.join(" ");
}
console.log(anotherDavet('gafur'));
console.log(anotherDavet('gafur', 'ali', 'veli'));