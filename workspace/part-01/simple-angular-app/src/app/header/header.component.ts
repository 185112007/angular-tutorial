import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequested = 1;

  @Output()
  pageChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(pageNumber: number){
    this.pageRequested = pageNumber;
    console.log(this.pageRequested);
    this.pageChangeEvent.emit(pageNumber);
  }

}
