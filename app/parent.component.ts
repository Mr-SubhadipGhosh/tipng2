import  {Component} from '@angular/core';
import {ChildComp} from './child.component';
 
@Component({
    selector: 'parent',
    template: ` 
              <h3 class="titles">Parent Component</h3>
              <input type ="text"  [(ngModel)]="textVal">
              <button (click)="onChange()">Change</button>
               
              <div class="child-style">
                <child [listval]="textArr" (changed)="onChangeEdit($event)">
                </child>
              </div>
    `,
    styles:[`
     
          .titles {
                    color:#0099FF
             }
            .child-style {
                    background-color:#ececec
            }
            ` ],
})
export class ParentComp {
    textArr: Array<string>;
    textVal: string;
    selected: number;
    onChange() {
      
      if(!this.textArr)
        this.textArr =  [];
        if(this.selected > -1)
        {
          this.textArr[this.selected] = this.textVal;
          this.selected = -1;
        }else{
          this.textArr.push(this.textVal);
        }
      this.textVal = "";
    }
    onChangeEdit(value) {
      this.selected = value;
      this.textVal = this.textArr[this.selected];
    }
 
}