import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DynamicComponentComponent} from "./component/dynamic-component/dynamic-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';

  constructor(
    private view: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    setTimeout(_ => {
      this.view.createComponent(DynamicComponentComponent);
    }, 5000)
  }
}
