import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './footer/item/item.component';
import { ColoryDirective } from './directive/colory.directive';
import { DelayDirective } from './directive/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
