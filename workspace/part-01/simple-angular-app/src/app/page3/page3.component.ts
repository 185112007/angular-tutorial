import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  subscription?: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.subscription = this.dataService.bookDeletedEvent.subscribe(book => {
      alert(`The book called ${book.title} was deleted.`);
    }, error => {
      alert('No books are deleted - the error was ' + error);
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  deleteLastBook(){
    this.dataService.deleteBook();
  }
}
