import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http , HttpModule} from '@angular/http';
import { BlogComponent } from './blog.component';

import {BlogService} from './blog.service';
@NgModule({
    imports: [ HttpModule,  FormsModule,  
    CommonModule
  ],
  declarations: [BlogComponent],
    providers:    [BlogService]
})
export class BlogModule { }