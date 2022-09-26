import { Component } from '@angular/core';
import {Book, SubjectArea, SubjectAreaString, Video} from "../model/Model";

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
    this.jsObjects();
    this.tsClasses();
    this.lambdaFunctions();
    this.objectEquality();
    this.usingEnum();
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

  jsObjects(){
    let myCustomer = {firstName: 'Matt', age: 25};
    console.log(myCustomer);
    console.log(typeof myCustomer);
  }

  tsClasses(){
    let myBook = new Book('Matt');
    let myVideo : Video;

    myBook.title = 'A fantastic read';
    console.log(myBook);
    console.log('My book is ', myBook);

    myBook.price = 100;
    console.log('to buy this book it will cost '
      + myBook.priceWithTax(0.2));
  }

  lambdaFunctions(){
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const oddNumbers = numbers.filter(
      num => {
        return num % 2 === 1;
      }
      );
    console.log(oddNumbers);

    const evenNumber = numbers.filter( num => num % 2 === 0 );
    console.log(evenNumber);
  }

  objectEquality(){
    console.log(1 == 1);
    console.log(1 === 1);

    // console.log("1" == 1);
    // console.log("1" === 1);

    // let myValue: number;
    // console.log(myValue == null);
  }

  usingEnum(){
    console.log("SubjectArea.HISTORY: " + SubjectArea.HISTORY);

    for (const subjectAreaKey in SubjectArea) {
      console.log(subjectAreaKey);
    }

    const enumArray = Object.keys(SubjectArea);
    // only needed for enums without custom value
    for (const value of enumArray.slice(enumArray.length/2)){
      console.log(value);
    }

    for (const value of enumArray){
      console.log(value);
    }

    for (const subject in SubjectArea){
      // console.log(SubjectArea[subject]);
    }

    let label = Object.keys(SubjectArea).map(key => key as SubjectAreaString).find(it => {

      return SubjectArea[it] === 'Science and Maths';
    })
    console.log(`lable is ${label}`);
  }
}
