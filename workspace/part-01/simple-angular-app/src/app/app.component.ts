import {Component, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('footer', {static: true})
  footerComponent!: FooterComponent;

  constructor() {
  }

  updateLastAccessed(){
    console.log('the previous last accessed value was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }
}
