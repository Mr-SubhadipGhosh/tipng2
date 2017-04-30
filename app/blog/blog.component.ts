import { Component, OnInit } from '@angular/core';

import {BlogService} from './blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './templates/blog.component.html'
})
export class BlogComponent implements OnInit {

  constructor(private blogserv: BlogService) { console.log('constructor');}

  ngOnInit() {
    this.loadUser(); console.log('oninit');
  }
  textTitle:string = "";
  textAuthor:string = "";
  textDesc:string = "";
  blogs:any = [];

  loadUser() {
    this.blogserv.getAll().subscribe(data => {this.blogs = data;});
  }
  addBlog(){
    this.blogserv.create( { "title": this.textTitle, "author": this.textAuthor, "description": this.textDesc }).subscribe(data => {console.log(data);alert('Blog added');this.clear();this.loadUser();});
  }
  clear(){
    this.textTitle = "";
    this.textAuthor= "";
    this.textDesc= "";
  }
}