import { Routes } from '@angular/router';

import { ParentComp } from './parent.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';

export const routes: Routes = [
    {
        path: 'contact', component: ContactComponent
    },
     {
        path: 'about', component: AboutComponent
    },
    { path: '', component: ParentComp },
    {
    path: 'blog', component: BlogComponent
    }
];