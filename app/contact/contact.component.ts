import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'contact',
    templateUrl: 'templates/contact.component.html'
})
export class ContactComponent {
 constructor(private contsrv: ContactService) {}
  profile = '';

  loadUser() {
  this.profile=  this.contsrv.getUser();
  }
}
