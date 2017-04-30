import  {Component} from '@angular/core';
import {ChildComp} from './child.component';
 
@Component({
    selector: 'parent',
    template: ` 
    <div class="form-horizontal">
  <fieldset>
    <legend>Add Item </legend>
    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Item</label>
      <div class="col-lg-10">      
              <input type="text" class="form-control" placeholder="Add Item" [(ngModel)]="textVal">
      </div>
    </div>
    <div class="form-group">
     <label for="inputEmail" class="col-lg-2 control-label"></label>
      <div class="col-lg-10">      
               <button class="btn btn-info" (click)="onChange()">Add/Edit</button>
               <button class="btn btn-default" (click)="clear()">Cancel</button>
      </div>
    </div>
    </fieldset>
    </div>
             
               
              <div class="child-style row">
                <child [listval]="textArr" (changed)="onChangeEdit($event)">
                </child>
              </div>
    `,
    styles:[`
     
            .child-style {
                    background-color:#eee
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
    clear(){
      this.textVal = "";
    }
 
}