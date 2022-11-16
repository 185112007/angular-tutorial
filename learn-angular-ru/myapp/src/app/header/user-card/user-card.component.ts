import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/iuser.type';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user?: IUser;
  @Output() userSelected: EventEmitter<IUser> = new EventEmitter();

  constructor() {
    console.log('constructor: ', this.user?.name);
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.user?.name);
  }

  selectUser(){
    this.userSelected.emit();
  }
}
