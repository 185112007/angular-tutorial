import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x: number = 5;
  public myWidth: number = 100;
  public user = {
    name: 'John'
  };

  public myClass = "red";

  public mycolor = "red";

  constructor() { 
    setTimeout(()=>{
      this.myClass = 'green';

      setTimeout(()=>{
        this.myClass = 'blue';
      }, 2000);
    }, 2000);
  }

  ngOnInit(): void {
  }

  random(): number{
    return Math.random();
  }

  changeColor(color: string){
    this.mycolor = color;
  }
}
