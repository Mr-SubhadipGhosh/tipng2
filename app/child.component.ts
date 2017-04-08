import  {Component, EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
 
@Component({
    selector: 'child',
    template: `
                <h2 class="titles">Child Component</h2>
                <div>
                  <div class="rowitem" *ngFor="let item of listval; let i = index;">{{item | stringModi: (i+1)+". " :true}}
                  <button (click)="onChange(i)">Edit</button></div>
                </div>
             `,
    inputs: ['listval'],
    outputs:['changed'],
     styles:[`
     
          .rowitem {
                    border-bottom: 1px solid #888;
                    padding: 5px;
                    color: #888;
                    font-size:18px;
            }
            .titles{
                color:red;
            }
            ` ],
})
export class ChildComp {
    listval: Array<string>;
    changed = new EventEmitter();
 
    onChange(val) {
         this.changed.emit(val);
    }
 
}