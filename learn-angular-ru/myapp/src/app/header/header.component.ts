import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../iuser.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public x = 5;

  public user: IUser = {
    name: 'John',
  };

  public myClass = 'red';

  private timer1: any;
  public timer2: any;
  public timer3: any;

  public mycolor = 'red';

  public isShown = true;
  public users = [
    {name: 'gafur'},
    {name: 'mehri'},
    {name: 'aziz'}
  ];

  constructor() {}

  ngOnInit(): void {
    this.timer1 = setInterval(() => {
      this.myClass = 'red';
    }, 2000);
    this.timer2 = setInterval(() => {
      this.myClass = 'blue';
    }, 3000);
    this.timer3 = setInterval(() => {
      this.myClass = 'green';
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
  }

  random(): number {
    return Math.random();
  }

  changeColor(color: string){
    this.mycolor = color;
  }
}
