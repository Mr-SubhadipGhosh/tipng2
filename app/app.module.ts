import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { StringModi } from './stringModi.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StringModi ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }