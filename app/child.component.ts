import  {Component, EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
 
import { BlogService } from './blog/blog.service';
@Component({
    selector: 'child',
    template: `    
    <div class="list-group">
  <a href="#" class="list-group-item active">
    Item List <span class="msg">(Click to edit)</span>
  </a>
  <a href="#" (click)="onChange(i)" class="list-group-item" *ngFor="let item of listval; let i = index;">
                      {{item | stringModi: (i+1)+". " :true}}
  </a>
</div>
                
             `,
    inputs: ['listval'],
    outputs:['changed'],
     styles:[`     
          .msg {
                    font-size:10px;
            }
            ` ],
  providers: [BlogService]
})
export class ChildComp {
    listval: Array<string>;
    changed = new EventEmitter();
     constructor(blogSrv:BlogService) { 
         console.log(blogSrv.baseUrl);
  } 
    onChange(val) {
         this.changed.emit(val);
    }
 
}