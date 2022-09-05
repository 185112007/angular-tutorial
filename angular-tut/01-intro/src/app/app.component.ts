import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export = public
export class AppComponent {
  title = 'Angular';
}
