import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  removed?: Book;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  deleteLastBook(){
    if (this.dataService.books.length > 0){
      this.removed = this.dataService.books.pop();
    }
  }
}
