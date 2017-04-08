import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { StringModi } from './stringModi.pipe';

import {ParentComp} from './parent.component';
import {ChildComp} from './child.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StringModi, ParentComp, ChildComp ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }