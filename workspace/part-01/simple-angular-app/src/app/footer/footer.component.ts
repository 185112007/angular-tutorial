import {Component, Inject, Input, OnInit} from '@angular/core';
import {DataService, IDataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  lastAccessed = '';

  constructor(@Inject('IDataService') private dataService: IDataService) { }

  ngOnInit(): void {
  }

  addBook(){
    const book = new Book();
    book.title = 'another book';
    book.author = 'matt';
    book.price = 45.9;
    this.dataService.addBook(book);
  }

  addBook2(){
    const book = new Book();
    book.title = 'another book';
    book.author = 'james';
    book.price = 45.9;
    this.dataService.addBook(book);
  }

}
