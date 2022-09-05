import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `<p>{{name}}</p>`,
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {

  name = 'Sample Data'

  constructor() { }

  ngOnInit(): void {
  }

}
