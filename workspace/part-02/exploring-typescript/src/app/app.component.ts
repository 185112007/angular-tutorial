import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exploring-typescript';

  myNumber: number;
  readonly immutableNumber: number = 3;

  constructor() {
    this.someMethod();
    this.exploringArrays();
    this.loops();
  }

  someMethod(){
    let anotherNumber: number;
    const aThirdNumber = 1;

    anotherNumber = 2;
    // aThirdNumber = 4;

    // this.immutableNumber = 5;
  }

  exploringArrays(){
    const myArray1 = new Array<number>(5);
    const myArray2: number[] = [1,2,3];

    console.log(myArray1);
    console.log(myArray2);
    console.log(myArray2[1]);
    console.log(myArray2.slice(0,2));
    console.log(myArray2.splice(0, 1));
    console.log(myArray2);

    myArray2.push(4);
    myArray2.push(5);
    console.log(myArray2);

    myArray2.pop();
    console.log(myArray2);
  }

  loops(){
    for (let i = 0; i < 10; i++){
      console.log(i);
    }

    const myArray: number[] = [1,23,43];
    console.log('\n');
    for (let next of myArray){
      console.log(next);
    }

    console.log('\n');
    for (const next in myArray){
      console.log(next);
    }

    console.log('\n');
    let num = 0;
    while (num < 5){
      console.log(num);
      num++;
    }

    console.log('\n');
    if (num < 5){
      console.log('the number is less than 5');
    }else{
      console.log('the number is 5 or greater');
    }
  }
}
