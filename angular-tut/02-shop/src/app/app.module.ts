import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './ui-components/nav/nav.component';
import {CategoryComponent} from './ui-components/category/category.component';
import {ProductComponent} from './ui-components/product/product.component';
import {ProductFilterPipe} from './ui-components/product/product-filter.pipe';
import {FormsModule} from "@angular/forms";
import {AlertifyService} from "./services/alertify.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
