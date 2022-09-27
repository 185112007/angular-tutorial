import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1';
  data: Array<Book>;
  constructor( dataService: DataService) {
    this.data = dataService.books;
  }

  ngOnInit(): void {
    setTimeout(() => {this.pageName = 'First page'}, 5000);
  }

  onButtonClick(){
    alert('hello - the date today is ' + new Date());
  }

}
