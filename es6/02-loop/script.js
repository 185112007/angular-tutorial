for (let i = 0; i < 10; i++) {
    console.log(i);
}

let cities = ['ankara', 'istanbul', 'izmir'];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

let j = 0;
while(j<10){
    console.log(j);
    j++;
}

let k = 0;
do{
    console.log(k);
    k++
}while(k<10);

cities.forEach((city)=>{
   console.log(city);
});