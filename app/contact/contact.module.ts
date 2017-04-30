// Angular Imports
import { NgModule } from '@angular/core';
// This Module's Components
import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent,
    ]
})
export class ContactModule {

}
