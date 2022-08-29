// number
let sayi: number;
sayi = 10;
let another: number = 234;

// string
let city: string;
city = 'adana';
let anotherString: string = 'istanbul';

// boolean
let dogrumu: boolean;
dogrumu = false;
let anotherBoolean: boolean = true;

// arrays
let numbers: number[] = [1,2,3,4];
let anotherArray: string[];
anotherArray = ['adana', 'ankara'];

// generic type
let arr: Array<number> = [1,2,3];

// tuple
let dizi: [number, string] = [2, 'adana'];

// enum
enum Color{
    RED, BLACK, BLUE
}
let color: Color = Color.BLUE;
console.log(color);

// any
let unknown: any = 'ankara';
unknown = 2.3;
unknown = {};
unknown = [];

// void
function printHello(): void{
    console.log("Hello, world!");
}
printHello();

// undefined
let age: number;
console.log(age);// undefined

// null
let customer: number[];
console.log(customer[0]);