// Angular Imports
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
// This Module's Components
import { ContactComponent } from './contact.component';
import {ContactService} from './contact.service';

@NgModule({
    imports: [ 
    ],
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent,
    ],
    providers:    [ContactService]
})
export class ContactModule {

}
