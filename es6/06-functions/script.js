// function declaration
function hello(){
    console.log("hello!");
}

hello();

// function expression
const hellofunction = function (){
  console.log('hello world!');
};

hellofunction();

//
const anotherFunction = () => {
  console.log('Whats up!');
};

anotherFunction();

const sum = (a, b) => a + b;

let toplam = sum(24,33);

console.log(toplam);