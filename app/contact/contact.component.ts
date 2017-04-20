import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
    selector: 'contact',
    templateUrl: 'templates/contact.component.html',
    providers:[ContactService]
})
export class ContactComponent {
 constructor(private contsrv: ContactService) {
   this.loadUser();
 }
  profile:any = {};
  profilestr:string = '';

  loadUser() {
    this.contsrv.create( { "title": "new", "author": "subha" }).subscribe(data => {console.log(data);});
    this.contsrv.getAll().subscribe(data => {this.profilestr = JSON.stringify(data);
      this.profile = data;
    console.log(this.profile.author);});
  }
}
