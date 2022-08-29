const arr = [1,2,3,4];

const kare = [];

arr.forEach(t => {
    kare.push(t * t);
});

console.log(arr);

console.log(kare);

// map
const mapArr = arr.map(n => {
    return n * 3;
});

console.log(mapArr);

// filter
const filterSample = arr.filter(n => n>2);
console.log(filterSample);

// reduce
const toplam = arr.reduce((acc, sayi)=>{
    return acc + sayi;
}, 0);

console.log(toplam);