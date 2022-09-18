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
    this.exploringArrays();
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
}
