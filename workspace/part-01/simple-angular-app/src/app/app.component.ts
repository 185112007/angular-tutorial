import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('footer', {static: true})
  footerComponent!: FooterComponent;

  @ViewChild('page2Component', {static: true})
  page2Component!: Page2Component;

  startTime!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  updateLastAccessed(){
    console.log('the previous last accessed value was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  incrementHitCounter(pageNumber: number){
    if (pageNumber === 2){
      this.page2Component.incrementHitCounter();
    }
  }
}
