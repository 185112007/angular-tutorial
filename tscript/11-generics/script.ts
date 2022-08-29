function getX(x:number):number{
    return x;
}

let sayi = getX(10);

console.log(sayi);

// generic function
function genericFunc<T>(x:T):T{
    return x;
}

let num = genericFunc<number>(3);
let str = genericFunc<string>('ankara');

// generic class
class GenericClass<T>{
    degisken: T;

    func(param: T):T{
        return param;
    }
}
let obj = new GenericClass<number>();
obj.func(123);