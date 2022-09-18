import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('footer', {static: true})
  footerComponent!: FooterComponent;

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
}
