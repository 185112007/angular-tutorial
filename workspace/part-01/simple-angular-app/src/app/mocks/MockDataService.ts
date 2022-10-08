import {Book} from "../model/Book";
import {EventEmitter} from "@angular/core";
import {IDataService} from "../data.service";

export class MockDataService implements IDataService{
  books = new Array<Book>();
  bookAddedEvent = new EventEmitter<Book>();
  bookDeletedEvent = new EventEmitter<Book>();

  addBook(book: Book){
    this.bookAddedEvent.emit(book);
  }
  deleteBook() {
  }
}
