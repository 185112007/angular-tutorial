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
  books?: Array<Book>;
  numberOfBookWrittenByMatt: number = 0;

  constructor( private dataService: DataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {this.pageName = 'First page'}, 5000);
    this.books = this.dataService.books;
    this.numberOfBookWrittenByMatt = this.books.filter(it => it.author === 'matt').length;

    // Observer
    this.dataService.bookAddedEvent.subscribe(newBook => {
      // when event receive do something here
      if (newBook.author === 'matt'){
        this.numberOfBookWrittenByMatt++;
      }
    }, error => {
      // when error do something here
    });

    // Observer
    this.dataService.bookDeletedEvent.subscribe(deletedBook => {
      if (deletedBook.author === 'matt'){
        this.numberOfBookWrittenByMatt--;
      }
    })
  }

  onButtonClick(){
    alert('hello - the date today is ' + new Date());
  }

}
