import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;

  public mycolor = "red";

  constructor() { 
    setTimeout(()=>{
      this.user = {
        name: 'John'
      }
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
