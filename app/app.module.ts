import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { StringModi } from './stringModi.pipe';
import { RouterModule } from '@angular/router';
import {ParentComp} from './parent.component';
import {ChildComp} from './child.component';
import  {ContactModule} from './contact/contact.module';
import  {AboutModule} from './about/about.module';
import {APP_BASE_HREF} from '@angular/common';
import { routes } from './app.routes';
import { BlogModule } from './blog/blog.module';
import {EllipsisDirective} from './ellipsis.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes),ContactModule, AboutModule, BlogModule],
  declarations: [ AppComponent, StringModi, ParentComp, ChildComp,EllipsisDirective ],
  providers:    [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }