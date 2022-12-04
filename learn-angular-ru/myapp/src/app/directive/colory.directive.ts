import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  private counter = 0;

  @HostBinding('style.color') myColor: string;
  @HostListener('click', ['$event']) changeColor(event: Event){
    console.log(event.type + ', counter: ' + this.counter++);
    this.generateRandomColor();
  }

  generateRandomColor() {
    this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor() {
    this.myColor = 'red';

    setTimeout(_ => {
      this.myColor = 'green';
    }, 2000)
  }

}
