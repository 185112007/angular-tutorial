import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  pageName = 'Page 1';
  books?: Array<Book>;
  numberOfBookWrittenByMatt: number = 0;

  subscription?: Subscription;
  subscription2?: Subscription;

  constructor( private dataService: DataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {this.pageName = 'First page'}, 5000);
    this.books = this.dataService.books;
    this.numberOfBookWrittenByMatt = this.books.filter(it => it.author === 'matt').length;

    // Observer
    this.subscription = this.dataService.bookAddedEvent.subscribe(newBook => {
      // when event receive do something here
      if (newBook.author === 'matt'){
        this.numberOfBookWrittenByMatt++;
      }
    }, error => {
      console.log('an error occurred', error);
    }, () => {
      // complete event
    });

    // Observer
    this.subscription2 = this.dataService.bookDeletedEvent.subscribe(deletedBook => {
      if (deletedBook.author === 'matt'){
        this.numberOfBookWrittenByMatt--;
      }
    }, error => {
      console.log('error: ', error);
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

  onButtonClick(){
    alert('hello - the date today is ' + new Date());
  }

}
